import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path'; // Add this line
import { createObjectCsvWriter } from 'csv-writer';
import { pipe } from 'framer-motion';

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}
const client = new MongoClient(uri);

interface UserPointsData {
  _id: any; // MongoDB ObjectId
  email: string;
  gituser: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  githubPoints: number;
  eventsAttended: number;
  eventPoints: number;
  totalPoints: number;
}

interface UserPoints {
  userId: string; // Email is used as userId
  username: string; // Using fullName as username
  totalPoints: number;
}

async function updatePointsData() : Promise<UserPoints[]> {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db('codedevils');
        const collection = database.collection('your_collection_name'); // replace with your collection name
        console.log("Running aggregation...");

        const rawResults = await database.collection('Users').aggregate([
            // Lookup github points
            {
                $lookup: {
                    from: "GitHub",
                    localField: "gituser",
                    foreignField: "gituser",
                    as: "githubData"
                }
            },
            {
                 $unwind: {
                    // Unwind the githubData array
                    path: "$githubData",
                    preserveNullAndEmptyArrays: true
                }
            },
            // Calculate event points
            {
                $lookup: {
                    from: "SunDevilSync",
                    let : { userEvents: "$attendedEvents"},
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $in: ["$eventId", "$$userEvents"]
                                        }
                                    }
                        }
                    ],
                    as: "events"
                }
            },
            {
                $project: {
                    _id: 1,
                    email: 1,
                    gituser: 1,
                    firstName: 1,
                    lastName: 1,
                    fullName: { $concat: ["$firstName", " ", "$lastName"] },
                    githubPoints: { $ifNull: ["$githubData.points", 0] },
                    eventsAttended: { $size: "$events" },
                    eventPoints: { $sum: "$events.value" },
                    totalPoints: { 
                        $add: [
                        { $ifNull: ["$githubData.points", 0] }, 
                        { $sum: "$events.value" }
                        ] 
                    }
                },
            },
              // Sort by total points descending
            {
                $sort: { totalPoints: -1 }
            }
        ]).toArray();

    const validResults: UserPointsData[] = [];
    
    for (const result of rawResults) {
      // Ensure each result has the required fields
      if (typeof result.email === 'string') {
        validResults.push({
          _id: result._id,
          email: result.email,
          gituser: typeof result.gituser === 'string' ? result.gituser : 'unknown',
          firstName: result.firstName,
          lastName: result.lastName,
          fullName: result.fullName,
          githubPoints: typeof result.githubPoints === 'number' ? result.githubPoints : 0,
          eventsAttended: typeof result.eventsAttended === 'number' ? result.eventsAttended : 0,
          eventPoints: typeof result.eventPoints === 'number' ? result.eventPoints : 0,
          totalPoints: typeof result.totalPoints === 'number' ? result.totalPoints : 0
        });
      }
    }

    console.log(`Valid results: ${validResults.length}`);

    const userPoints: UserPoints[] = validResults.map(user => {
      // Create username with fallbacks
      let username: string;
      if (typeof user.fullName === 'string' && user.fullName.trim() !== '') {
        username = user.fullName.trim();
      } else if (typeof user.gituser === 'string') {
        username = user.gituser;
      } else {
        username = 'Unknown User';
      }

      return {
        userId: user.email,
        username: username,
        totalPoints: user.totalPoints
      };
    });

        // Write to CSV
        const csvFilePath = path.join(process.cwd(), 'data', 'user-points.csv');

        const dir = path.dirname(csvFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const csvWriter = createObjectCsvWriter({
            path: csvFilePath,
            header: [
                { id: 'userId', title: 'User ID' },
                { id: 'username', title: 'Username' },
                { id: 'totalPoints', title: 'Total Points' }
            ]
        });

        await csvWriter.writeRecords(userPoints);
        console.log(`Points data written to ${csvFilePath}`);

        return userPoints;
  } catch (error) {
    console.error('Error updating points data:', error);
    throw error;
  } finally {
    await client.close();   
    console.log('MongoDB connection closed');
  }
}

export async function getPointLeaders(): Promise<UserPoints[]> {
  try {
    const csvFilePath = path.join(process.cwd(), 'data', 'user-points.csv');
    
    // If CSV doesn't exist, update the points data first
    if (!fs.existsSync(csvFilePath)) {
      return (await updatePointsData()).slice(0, 10);
    }
    
    // Read the CSV file and parse it
    const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
    const rows = fileContent.split('\n').slice(1); // Skip header row
    
    const points: UserPoints[] = [];
    
    for (const row of rows) {
      if (!row.trim()) continue;
      
      const parts = row.split(',');
      // Ensure we have at least 3 parts
      if (parts.length < 3) continue;
      
      // Get parts with type safety
      const userId = parts[0] || 'unknown';
      const username = parts[1] || 'Unknown User';
      
      // Fix the problematic line
      let pointsValue = 0;
      if (parts[2] && parts[2].trim() !== '') {
        pointsValue = parseInt(parts[2].trim(), 10);
        if (isNaN(pointsValue)) pointsValue = 0;
      }
      
      points.push({
        userId,
        username,
        totalPoints: pointsValue
      });
    }
    
    // Sort and return top 10
    return points
      .sort((a, b) => b.totalPoints - a.totalPoints)
      .slice(0, 10);
  } catch (error) {
    console.error('Error getting point leaders:', error);
    return [];
  }
}

export async function GET() {
  try {
    const points = await updatePointsData();
    return NextResponse.json({ 
      success: true,
      message: "Points updated successfully",
      count: points.length
    });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update points' },
      { status: 500 }
    );
  }
}

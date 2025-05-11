"use client";

import { useState } from "react";
import CollapsibleSection from "src/app/components/CollapsibleSection";
import ContributorRow from "src/app/components/ContributorRow";
import SubmitButton from "src/app/components/SubmitButton";

// Define types for our data structures
interface User {
  gitUser: string;
  email: string;
}

interface EventItem {
  id: string;
  name: string;
  points: number;
}

const PointsTrackerPage = () => {
  // Initial mock data
  const initialUnassignedUsers: User[] = [
    { gitUser: "[git user 1]", email: "" },
    { gitUser: "[git user 2]", email: "user_2_email@asu.edu" },
  ];

  const initialAssignedUsers: User[] = [
    { gitUser: "[git user 3]", email: "user_3_email@asu.edu" },
    { gitUser: "[git user 4]", email: "user_4_email@asu.edu" },
  ];

  const initialEvents: EventItem[] = [
    { id: "Event ID", name: "Event Name - Event ID", points: 20 },
    { id: "Old Event ID", name: "Old Event Name - Event ID", points: 0 },
  ];

  // State for managing users and events with proper typing
  const [unassignedUsers, setUnassignedUsers] = useState<User[]>(
    initialUnassignedUsers
  );
  const [assignedUsers, setAssignedUsers] =
    useState<User[]>(initialAssignedUsers);
  const [events, setEvents] = useState<EventItem[]>(initialEvents);

  // State for form submissions
  const [submitting, setSubmitting] = useState<boolean>(false);

  // Handle email changes in the unassigned section
  const handleEmailChange = (gitUser: string, newEmail: string): void => {
    setUnassignedUsers((users) =>
      users.map((user) =>
        user.gitUser === gitUser ? { ...user, email: newEmail } : user
      )
    );
  };

  // Handle assigning users (moving from unassigned to assigned)
  const handleAssignUsers = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitting(true);

    // Filter users with valid emails to assign
    const usersToAssign = unassignedUsers.filter(
      (user) => user.email.trim() !== ""
    );

    // Add them to assigned users
    setAssignedUsers([...assignedUsers, ...usersToAssign]);

    // Remove them from unassigned users
    setUnassignedUsers((users) =>
      users.filter((user) => user.email.trim() === "")
    );

    // Simulate API delay
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  // Handle unassigning a user (moving from assigned to unassigned)
  const handleUnassignUser = (gitUser: string): void => {
    // Find the user to unassign
    const userToUnassign = assignedUsers.find(
      (user) => user.gitUser === gitUser
    );

    // Only proceed if we found the user
    if (userToUnassign) {
      // Add to unassigned users
      setUnassignedUsers([...unassignedUsers, userToUnassign]);

      // Remove from assigned users
      setAssignedUsers((users) =>
        users.filter((user) => user.gitUser !== gitUser)
      );
    } else {
      console.error(`User with gitUser "${gitUser}" not found`);
    }
  };

  // Handle event point changes
  const handlePointChange = (eventId: string, points: number): void => {
    setEvents((events) =>
      events.map((event) =>
        event.id === eventId ? { ...event, points } : event
      )
    );
  };

  // Handle event form submission
  const handleEventSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  // The rest of your component remains the same
  return (
    <div className="w-full px-4">
      <div className="px-2 sm:px-6 pt-32 pb-4 flex justify-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center inline-block mb-6">
          Points Tracker Admin Page
        </h1>
      </div>

      {/* Container to limit width of sections */}
      <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        {/* Unassigned GitHub contributors section */}
        <CollapsibleSection title="Unassigned GitHub contributors">
          <form className="space-y-4" onSubmit={handleAssignUsers}>
            {unassignedUsers.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                No unassigned users found
              </div>
            ) : (
              unassignedUsers.map((user, index) => (
                <ContributorRow
                  key={index}
                  gitHubUser={user.gitUser}
                  asuEmail={user.email}
                  editable={true}
                  showRemoveButton={false}
                  onEmailChange={(email) =>
                    handleEmailChange(user.gitUser, email)
                  }
                />
              ))
            )}

            <div className="flex justify-end mt-4">
              <SubmitButton
                isLoading={submitting}
                disabled={
                  submitting ||
                  unassignedUsers.every((u) => u.email.trim() === "")
                }
              />
            </div>
          </form>
        </CollapsibleSection>

        {/* Assigned contributors section */}
        <CollapsibleSection title="Assigned contributors">
          <div className="space-y-4">
            {assignedUsers.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                No assigned users found
              </div>
            ) : (
              assignedUsers.map((user, index) => (
                <ContributorRow
                  key={index}
                  gitHubUser={user.gitUser}
                  asuEmail={user.email}
                  editable={false}
                  showRemoveButton={true}
                  onRemove={() => handleUnassignUser(user.gitUser)}
                />
              ))
            )}
          </div>
        </CollapsibleSection>

        {/* Events section */}
        <CollapsibleSection title="Events">
          <form className="space-y-4" onSubmit={handleEventSubmit}>
            {events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 p-2 border rounded-md sm:border-0 sm:rounded-none mb-3 sm:mb-0 bg-gray-50 sm:bg-transparent"
              >
                <div className="w-full sm:hidden text-xs text-gray-500 font-medium">
                  Event
                </div>
                <div className="w-full sm:w-2/3 p-2 text-left sm:text-right bg-white border sm:bg-transparent sm:border-0">
                  {event.name}
                </div>

                <div className="w-full sm:hidden text-xs text-gray-500 font-medium">
                  Points
                </div>
                <div className="w-full sm:w-1/3">
                  <input
                    type="number"
                    value={event.points}
                    onChange={(e) =>
                      handlePointChange(event.id, parseInt(e.target.value) || 0)
                    }
                    className="w-full p-2 border text-center"
                    min="0"
                  />
                </div>
              </div>
            ))}

            <div className="flex justify-end mt-4">
              <SubmitButton isLoading={submitting} disabled={submitting} />
            </div>
          </form>
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default PointsTrackerPage;

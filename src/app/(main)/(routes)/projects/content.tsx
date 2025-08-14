import { Backpack, Gamepad2, Hammer, PanelsTopLeft, Smartphone, FileOutput } from 'lucide-react';
import getSVG from '~/public/svg-data';
import Link from 'next/link';
import Image from 'next/image'
import ApplyButton from '~/src/app/components/Projects/ApplyButton';
import { getMember } from '~/src/app/components/members';
import { MemberID } from '~/src/app/components/members';
import { ExternalLink } from 'lucide-react';
import React from "react";

// Internalized components

const ProjectTitle: React.FC<{
    title: string;
    Icon: React.ComponentType<any>;
    projectID: ProjectID;
    pageID: string;
}> = ({ title, Icon, projectID, pageID }) => (
    <div id="project-title" className={pageID}>
        <h1>{title}</h1>
        <div><Icon /></div>
        <div><ApplyButton project={projectID}>Join the Project!</ApplyButton></div>
    </div>
);

const ProjectDescription: React.FC<{
     text: string;
     pageID: string;
}> = ({ text, pageID }) => (
    <p id="project-description" className={pageID}>
        {text}
    </p>
);

type ProjectTextProps = {
    paragraphs: (string | JSX.Element)[];
    pageID: string;
};

const ProjectText: React.FC<ProjectTextProps> = ({ paragraphs, pageID }) => (
    <>
        {paragraphs.map((para, i) =>
            typeof para === "string" ? (
                <p key={i} id="project-text" className={pageID}>
                    {para}
                </p>
            ) : (
                React.cloneElement(para, { key: i })
            )
        )}
    </>
);

const ProjectGoals: React.FC<{
    goals: string[];
    pageID: string;
}> = ({ goals, pageID }) => (
    <div id="project-goals" className={pageID}>
        <div>
            <div />
            <h2>Current Project Goals</h2>
        </div>
        <div>
            <ul>
                {goals.map((goal, idx) => (
                    <li key={idx}>{goal}</li>
                ))}
            </ul>
            <Hammer />
        </div>
    </div>
);

const ProjectStack: React.FC<{
    pageID: string;
    stack: { href: string; svgID: number }[];
}> = ({ pageID, stack }) => (
    <div id="project-stack" className={pageID}>
        {stack.map(({ href, svgID }) => (
            <Link key={href} href={href} target="_blank">
              {getSVG({ svgID })}
            </Link>
        ))}
    </div>
);

const GitMonitor: React.FC<{
    pageID: string
}> = ({ pageID }) => (
    <div id="git-monitor" className={pageID}>
        <div>GitHub Activity</div>
        <div></div>
    </div>
);

type ProjectImagesProps = {
    projectID: ProjectID;
    pageID: string;
    count?: number;
    files?: string[];
    width?: number;
    height?: number;
    alt?: string;
};

const ProjectImages: React.FC<ProjectImagesProps> = ({
    projectID,
    pageID,
    count = 3,
    files,
    width = 300,
    height = 200,
    alt = "project image",
}) => {
    const sources = files && files.length > 0
        ? files.map((f) => `/assets/projects/${projectID}/${f}`)
        : Array.from({ length: count }, (_, i) =>
            `/assets/projects/${projectID}/project-image-${i + 1}.png`
      );
    
    return (
        <div id="project-images" className={pageID}>
            {sources.map((src) => (
                <Image key={src} src={src} alt={alt} width={width} height={height} />
            ))}
        </div>
    );
};



type ProjectTeamProps = {
    projectID: ProjectID;
    pageID: string;
};


const ProjectTeam: React.FC<ProjectTeamProps> = ({ projectID, pageID }) => {
    const team = projectTeams[projectID];

    if (!team || team.length === 0) {
        return (
            <div id="project-team" className={pageID}>
                <h3>No contributors just yet. Be the first to apply!</h3>
            </div>
        );
    }

    const [leaderID] = team[0] as [MemberID, string?];
    const contributors = team.slice(1);

    return (
        <div id="project-team" className={pageID}>
            {/*Heading */}
            <div>
                <div />
                <h2>Project Team</h2>
            </div>

            {/* Leader Info */}
            <div>
                <Image
                    src={getMember({ memberID: leaderID as MemberID, memberData: "image" })}
                    alt="Project Leader's photo"
                    width={200}
                    height={200}
                />
                <div>
                    <h2>{getMember({ memberID: leaderID as MemberID, memberData: "name" })}</h2>
                    <p>{getMember({ memberID: leaderID as MemberID, memberData: "bio" })}</p>
                </div>
            </div>

            {/* Contributors */}
            <div>
                {contributors.length > 0 ? (
                    contributors.map(([member, link], index) => (
                        <div key={index + 1}>
                            {link ? (
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {member}
                                </a>
                            ) : (
                                <p>{member}</p>
                            )}
                        </div>
                    ))
                ) : (
                    <><div /><h3>No contributors just yet. Be the first to apply</h3></>
                )}
            </div>
        </div>
    );
};

type RepoLinkProps = {
    href: string;
    pageID: string;
};

const RepoLink: React.FC<RepoLinkProps> = ({ href, pageID }) => (
    <div id="project-page" className={pageID}>
        <div id="git-link">
            <a href={href} target="_blank" rel="noreferrer noopener">
                View GitHub Repository
                <ExternalLink className="ml-2 w-5 h-5" />
            </a>
        </div>
    </div>
);



export const projectIDs = [
    'academy',
    'website',
    'gamedev',
    'mobile',
    'scraper',
    
] as const;

export type ProjectID = typeof projectIDs[number];


export const projectApplicationLinks = {
    academy: 'https://docs.google.com/forms/d/e/1FAIpQLSdO_e-4Sl1JtNxqP674A8ZFL57gcwEu5piLhicXDE44rw9KDQ/viewform?usp=sf_link',
    website: 'https://docs.google.com/forms/d/e/1FAIpQLSd5DWM45tlvF0rzjzHmhI3nRrU5EzuztpMrHMrRwAiXdGl-jg/viewform?usp=sf_link',
    gamedev: 'https://docs.google.com/forms/d/e/1FAIpQLSdkWDK_idZLQJ8X98-9iCYxnwTF03ji3QRdzwiU5wz8d3h8hg/viewform?usp=sf_link',
    mobile:  'https://docs.google.com/forms/d/e/1FAIpQLSd--0dToZAGV4MThGzuiJuSy_GCmFIoPjkgRjAbBPnk0B6MrA/viewform?usp=sf_link',
    scraper: 'https://docs.google.com/forms/d/e/1FAIpQLSfJHHugJUM3Sc_r_A7nCDjfSyaIXTepd90raUZ_zEwVZ_mEMg/viewform?usp=sf_link',
    }

export const gitRepoLinks = {
    academy: "https://github.com/ASU-CodeDevils/CD-Academy",
    website: "https://github.com/ASU-CodeDevils/codedevils.org",
    gamedev: "https://github.com/ASU-CodeDevils/CD-GameDev",
    mobile:  "https://github.com/ASU-CodeDevils/CD-Mobile",
    scraper: "https://github.com/ASU-CodeDevils/scraper.codedevils.org",
    };
    
 


    // format: element [0] must be of type MemberID all other elements must be an array of one or
    //         two string literals.  First element is the contributor's name, second is an optional link.
    
const projectTeams = {
    academy: [['pita'],
              ['Allie Betlewicz'],
              ['John Miller'],
              ['Jacob Kobrick'],
              ['Adrian Parra'],
             ],
    website: [  ['pita'],
                ['Juliana Bush'],
                ['Ella Rushing'],
                ['Boubacar S Diiallo'],
                ['John Miller'],
                ['Rhett Harrison'],
                ['David Nevarez', 'https://davidnevarez.info/'],
                ['Alejandro Jimenez'],
                ['Darshan Phaldesai'],
                ['Jaith Darrah'],
                ['Tyler Wallace'],
                ['Jaret Aparo', 'https://jaretaparo.com/']
            ],
    gamedev: [  ['remi'],
                ['Autumn O'],
                ['Pita Sherwood', 'https://pita.blue'],
                ['John Miller'],
                ['Alejandro Jimenez'],
                ['Josh Walker'],
                ['Carter Hollman'],
                ['Jaith Darrah', 'https://www.jaithdarrah.com/'],
                ['Krishnaprasad Sreekum']
            ],
    mobile: [['pita'],
            ['John Miller'],
            ['Alejandro Jimenez'],
            ['Korbin Hillan'],
            ],
    scraper: [
                ['frankie'],
                ['Logan Wright'],
                ['Carter Hollman'],
                ['Derrick Berko'],
                ['Michael Ellmer']
            ]
}



    const processContent = ({projectID, contentID, pageID}:{
        projectID: ProjectID,
        contentID: number,
        pageID: string
    }) => {

    const content = {
        academy: [
            <ProjectTitle
                key={0}
                title="CodeDevils Academy"
                Icon={Backpack}
                projectID={projectID}
                pageID={pageID}
            />,
            <ProjectDescription
                key={1} 
                text="A sister website to CodeDevils.org. A content library for users to visit and learn how to code!"
                pageID={pageID}
            />,
            <ProjectText
                key={2}
                paragraphs={[
                "The sister website to CodeDevils.org, CodeDevils Academy is our content management and learning platform.  We&apos;re excited to announce the development of our dedicated learning platform designed to empower our community through accessible educational resources.  This project will be built from the ground up, although the designs for it are in the late stages.  Our vision for CodeDevils Academy is to create an engaging, user-friendly environment where members can easily access a wealth of learning materials tailored to their needs.",
                "We aim to provide a seamless experience for all users. The platform will feature a clean and organized layout, allowing members to quickly find exclusive tutorials, courses, and resources without hassle.  We plan to create a robust content management system that will allow us to upload, edit, and manage educational materials efficiently.", 
                "The platform will host a variety of content formats, including written tutorials, video lessons, quizzes, and coding challenges. By offering multiple learning styles, we aim to engage all members, whether they are beginners or advanced developers.  To keep our members motivated, we&apos;ll implement progress tracking features that allow users to monitor their advancement through courses and tutorials. This will help them set goals and celebrate their achievements.",
                 "If you&apos;re ready to make a difference and help us build CodeDevils Academy, we invite you to apply. Let&apos;s create a premier learning platform that reflects our commitment to education and community. Your journey with CodeDevils starts here—let&apos;s make something great!"
                ]}
                pageID={pageID}
            />,
            <ProjectGoals
                key={3}
                pageID={pageID}
                goals={[
                    "Implement a content player component",
                    "Create user authentication systems",
                    "Finalize front end and admin panel"
                ]}
            />,
            <ProjectStack
                key={4}
                pageID={pageID}
                stack={[
                    { href: "https://www.typescriptlang.org/", svgID: 3 },
                    { href: "https://nextjs.org/", svgID: 2 },
                    { href: "https://www.mongodb.com", svgID: 4 }
                ]}
            />,
            <GitMonitor key={5} pageID={pageID} />
            ,
            <ProjectImages
                key={6}
                projectID={projectID}
                pageID={pageID}
            />,
            <ProjectTeam
                key={7}
                projectID={projectID}
                pageID={pageID}
            />,
            <RepoLink key={8} href={gitRepoLinks[projectID]} pageID={pageID} />
        ],    
        website: [
            <ProjectTitle
                key={0}
                title="CodeDevils Website"
                pageID={pageID}
                projectID={projectID}
                Icon={PanelsTopLeft}
            />,
            <ProjectDescription
                key={1} 
                pageID={pageID}
                text="Our rapidly-evolving website. New features and tools are constantly being added!"
            />,
            <ProjectText
                key={2}
                paragraphs={[
                "This is the codedevils.org project; the website you&apos;re currently looking at.  With many features planned, and with an active rebrand going on, we&apos;ll need some talented hands to keep this ship running.  This is considered one of our core projects, meaning it is essential to the CodeDevils brand and identity.  We build our websites in Next.js and Typescript.  Next.js is a powerful framework for JavaScript/TypeScript that handles frontend and backend deployments.  One primary focus of the website&apos;s design is to keep the code maintainable, manageable, and readable.  We will not be building web pages that are simply hard-coded in HTML, but are dynamic and rely on backend data structures to function.",
                "We have a lot of fun features planned, many of them are just to show off our skills as programmers, but we&apos;re here to advertise our organization and put our best foot forward to outside companies, prospective contributors, and to the university we stand behind.  Our project is dedicated not to being flashy, but to being robust and respectable to the community at large.  We aim to create a website that is not just functional but also resonates with our audience, reflecting our dedication to quality and professionalism.",
                "We&apos;re seeking contributors who share our passion for technology and community. Whether you&apos;re a seasoned developer, a creative designer, or even someone wanting to dip their toes into web design and learn from us, you&apos;re in the right place.  If you&apos;re ready to make a meaningful contribution, we invite you to join us. Whether you can dedicate a few hours or want to take on a larger role, your efforts will help shape the future of CodeDevils.org. This is more than just coding; it&apos;s about building a resource that empowers our community and showcases our commitment to excellence.",
                "Let&apos;s work together to create a website that embodies the spirit of CodeDevils—dynamic, robust, and community-focused. Your journey with us starts here. Let&apos;s make it remarkable!"
                ]}
                pageID={pageID}
            />,
            <ProjectGoals
                key={3}
                pageID={pageID}
                goals={[
                    "Add and improve features using service API&apos;s",
                    "Redesign the website&apos;s colors and design to align with CodeDevils rebranding",
                    "Rewrite and redesign the website&apos;s content"
                ]}
            />,
            <ProjectStack
                key={4}
                pageID={pageID}
                stack={[
                    { href: "https://www.typescriptlang.org/", svgID: 3 },
                    { href: "https://nextjs.org/", svgID: 2 },
                    { href: "https://www.mongodb.com", svgID: 4 }
                ]}
            />,
            <GitMonitor key={5} pageID={pageID} />
            ,
            <ProjectImages
                key={6}
                projectID={projectID}
                pageID={pageID}
            />,
            <ProjectTeam
                key={7}
                projectID={projectID}
                pageID={pageID}
            />,
            <RepoLink key={8} href={gitRepoLinks[projectID]} pageID={pageID} />
        ],
        gamedev: [
            <ProjectTitle
                key={0}
                pageID={pageID}
                title="CodeDevils GameDev"
                Icon={Gamepad2}
                projectID={projectID}
            />,
            <ProjectDescription
                key={1}
                pageID={pageID}
                text="A series of Game Development projects to implement in various places around CodeDevils!"
            />,
            <ProjectText
                pageID={pageID}
                key={2}
                paragraphs={[
                    "Do you want to learn more about game development? Then the CD-GameDev project is for you. We have decided to use the Rust programming language, a growingly popular, high-performance, multi-purpose programming language that is sure to be a great tool to add to your skill set. And although most games tend to use object oriented programming, we have opted to use a different paradigm that is also growing more popular in the game dev world; Entity Component System (ECS). This paradigm allows for major performance gains in compute heavy games, and also offers a different way to think about objects in our game by separating data and systems. For this endeavor, we will be using the Bevy ECS framework, one of the best on the market.",
                
                    <p id="project-text" className={pageID} key="link-para">
                    One of the main drivers behind the decision of using Rust + Bevy, was that it is open-source, and is turtles all the way down. In other words, everything is Rust from top to bottom, allowing us to delve deep into how the Bevy ECS framework, and all its accompanying tools, work under the hood. We want to teach you about all the components that goes into creating and running a game, and traditional game engines usually abstract all those details away. But that is not to say that Bevy is not easy to use. After some practice, we believe you&apos;ll find that it is incredibly ergonomic and user friendly, thanks to the amazing engineers contributing to the Bevy project. The game itself will be inspired from the{" "}
                        <span>
                            <a
                                id="info-link"
                                href="https://en.wikipedia.org/wiki/Metroidvania"
                                target="_blank"
                                rel="noopener"
                            >
                                metroidvania genre
                            </a>
                        </span>
                    , but might take elements from other genres as well. It will be a 2D, side-view game, with a pixel art style. The features and systems we will implement will evolve over time as we prototype and progress together. By joining this project, you won&apos;t just be coding what we tell you to code, we also want you to be part of the discussion about where the game is headed in all of its aspect, would it be features and systems, or story and lore.
                    </p>,

                    "The journey will be a challenging one, but will be very rewarding as well. You might have to learn quite a few things before you can get started contributing, especially if you never coded in Rust or are new to game development, but we will be there every step of the way, and we have curated a selection of resources to help you get started using Rust and Bevy, so that you can start your game dev journey with us as fast as possible. From things like how to handle asset loading, animations, handling audio, to how game handles physics and graphics rendering, you&apos;ll come out of this project with a greater understanding of all that comes into play when creating games."
                ]}
            />,
            <ProjectGoals
                key={3}
                pageID={pageID}
                goals={[
                    "Create systems and plugins to facilitate the creation of the game",
                    "Program and integrate multiple gameplay systems together",
                    "Publish the game on a game distribution platform"
                ]}
            />,
            <ProjectStack
                key={4}
                pageID={pageID}
                stack={[
                    { href: "https://www.rust-lang.org", svgID: 0 },
                    { href: "https://bevyengine.org", svgID: 1 }
                ]}
            />,    
            <GitMonitor key={5} pageID={pageID} />
            ,
            <ProjectImages
                key={6}
                pageID={pageID}
                projectID={projectID}
            />,
            <ProjectTeam
                key={7}
                pageID={pageID}
                projectID={projectID}
            />,
            <RepoLink key={8} href={gitRepoLinks[projectID]} pageID={pageID} />
        ],
        mobile: [
            <ProjectTitle
                key={0}
                pageID={pageID}
                title="CodeDevils Mobile"
                projectID={projectID}
                Icon={Smartphone}
            />,
            <ProjectDescription
                key={1}
                pageID={pageID}
                text="Our Mobile app! Built for iOS and Android, helps contributors keep up to date with projects and keeps members aware of events!"
            />,
            <ProjectText
                key={2}
                paragraphs={[
                    "Welcome to the CodeDevils Mobile project page! As part of our commitment to fostering a community of developers, we are excited to announce the development of our mobile app, CodeDevils Mobile. This project is designed to create a welcoming space for anyone interested in mobile development, whether you&apos;re a beginner looking to learn or an experienced developer eager to share your knowledge.",
                    "With CodeDevils Mobile, our vision is to build an inclusive platform that encourages exploration and collaboration in the world of mobile app development. We recognize that mobile technology is an integral part of our lives, and we want to provide a space where members can come together to learn, share ideas, and showcase their projects. By utilizing Dart/Flutter, Swift, and Kotlin, we aim to create a versatile application that caters to both iOS and Android platforms.",
                    "CodeDevils Mobile, in its current vision, will serve primarily as a community platform for CodeDevils events, Academy content, and have a contributor platform to stay up to date with the latest project announcements and changes.  Additional features will come as the project unfolds.  We have a lot of excitement for this project and we&apos;re very excited to see what it becomes.",
                    "If you have a particular interest or passion for mobile development, we encourage you to get started early on this project and make your mark!  Your influence on the direction and execution of this project will be invaluable to both your career and to the project as a whole."
                ]}
                pageID={pageID}
            />,
            
            <ProjectGoals
                key={3}
                pageID={pageID}
                goals={[
                    "Create systems and plugins to facilitate the creation of the game",
                    "Program and integrate multiple gameplay systems together",
                    "Publish the game on a game distribution platform"
                ]}
            />,
            <ProjectStack
                key={4}
                pageID={pageID}
                stack={[
                    { href:"https://flutter.dev", svgID: 5},
                    { href:"https://dart.dev" , svgID: 6},
                    { href:"https://kotlinlang.org" , svgID: 7},
                    { href:"https://www.swift.org" ,  svgID: 8}
                ]}
            />,
            <GitMonitor key={5} pageID={pageID} />
            ,
            <ProjectImages
                key={6}
                projectID={projectID}
                pageID={pageID}
            />,
            <ProjectTeam
                key={7}
                pageID={pageID}
                projectID={projectID}
            />,    
            <RepoLink key={8} href={gitRepoLinks[projectID]} pageID={pageID} />
        
        ],
        scraper: [
            <ProjectTitle
                key={0}
                pageID={pageID}
                title="CodeDevils Scraper"
                Icon={FileOutput}
                projectID={projectID}
            />,
            <ProjectDescription
                key={1}
                pageID={pageID}
                text="A job post scraping tool built to keep our members up to date with the latest developments in the job market!"
            />,
            <ProjectText
                key={2}
                paragraphs={[
                    "CD-Scraper is a project designed to teach the fundamentals of web scaping and the tools to make that happen. The goal is to design a system for scraping job posting from various websites and serving the collected data through an API build using SpringBoot. As this project is going to be based fully in Java, it is friendly to those that are just starting off their programming journey.",
                    "Throughout this project, contributors will have the opportunity to collaborate with peers, share insights, and learn from each other. This team-oriented approach fosters a supportive environment where beginners can ask questions and gain confidence in their coding abilities. You&apos;ll not only develop your technical skills but also engage in problem-solving and critical thinking as you navigate the challenges of web scraping together.",
                    "Each contributor will be responsible for implementing a script to scrape different job posting websites (i.e. Indeed, LinkedIn). Through this process, you will, hopefully, have a grasp on the some fundamental HTML parsing.",
                    "In this project, you will NOT be working with APIs or any web related technology. Those will be managed by staff to ensure this project is easy to pick up for those new to programming, but wanting to contribute to a more complex project outside of school assignments. Also, you will NOT be working with any data and their persistence (i.e. databases).",
                    "If you want to apply what you have learned about Java in class into a project that is more tangible, join our beginner-friendly project by filling out our application. Your project lead will reach out to you within the week. Let&apos;s learn to code by building something meaningful and fun!"
                ]}
                pageID={pageID}
            />,
            <ProjectGoals
                key={3}
                pageID={pageID}
                goals={[
                    "Learn about web scraping",
                    "Take Java skills from school and implement them into a tangible project",
                    "Gain confidence to start your own personal projects"
                ]}
            />,
            
            <ProjectStack
                key={4}
                pageID={pageID}
                stack={[
                    { href:"https://www.java.com/en/", svgID: 9}
                ]}
            />,
            <GitMonitor key={5} pageID={pageID} />
            ,
            <ProjectImages
                key={6}
                projectID={projectID}
                pageID={pageID}
            />,
            <ProjectTeam
                key={7}
                pageID={pageID}
                projectID={projectID}
            />,
            <RepoLink key={8} href={gitRepoLinks[projectID]} pageID={pageID} />    
               
        ]

    }

    if (!(projectID in content)) { throw new Error('Invalid Project ID'); }
    if (contentID < 0 || contentID >= content[projectID].length) { throw new Error('Invalid Content ID'); }


    return (content[projectID][contentID]);

}

const getContent = ({projectID, contentID, pageID}:{
    projectID: ProjectID | 'all',
    contentID: number
    pageID: string
}) => {
    if (projectID === 'all') { return projectIDs.map(id => processContent({projectID: id, contentID, pageID})); }
    return processContent({projectID, contentID, pageID});
}

export default getContent;

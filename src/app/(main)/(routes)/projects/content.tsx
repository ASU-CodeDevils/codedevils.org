import { Backpack, Gamepad2, Hammer, PanelsTopLeft, Smartphone, FileOutput } from 'lucide-react';
import getSVG from '~/public/svg-data';
import Link from 'next/link';
import Image from 'next/image'
import ApplyButton from '~/src/app/components/Projects/ApplyButton';
import { getMember } from '~/src/app/components/members';
import { MemberID } from '~/src/app/components/members';


const projectIDs = [
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

export const gitreporslinks = {
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
                ['Sai Rithwik Kukunuri','https://simplyrithwik.netlify.app/'],
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



    const processContent = ({projectID, contentID}:{
        projectID: ProjectID,
        contentID: number,
    }) => {
    
    const content = {
        academy: [(
            <div key={0} id='project-title'>
                <h1>CodeDevils Academy</h1>
                <div>
                    <Backpack />
                </div>
                <div>
                    <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                </div>
            </div>
        ), (
            <p key={1} id='project-description'>A sister website to CodeDevils.org. A content library for users to visit and learn how to code!</p>
        ), (
            <>
                <p id='project-text'>
                The sister website to CodeDevils.org, CodeDevils Academy is our content management and learning 
                platform.  We&apos;re excited to announce the development of our dedicated learning platform designed 
                to empower our community through accessible educational resources.  This project will be built 
                from the ground up, although the designs for it are in the late stages.  Our vision for CodeDevils 
                Academy is to create an engaging, user-friendly environment where members can easily access a wealth 
                of learning materials tailored to their needs.
                </p><p id='project-text'>
                We aim to provide a seamless experience for all users. The platform will feature a clean and organized 
                layout, allowing members to quickly find exclusive tutorials, courses, and resources without hassle.  
                We plan to create a robust content management system that will allow us to upload, edit, and manage 
                educational materials efficiently. 
                </p><p id='project-text'>
                The platform will host a variety of content formats, including written tutorials, video lessons, 
                quizzes, and coding challenges. By offering multiple learning styles, we aim to engage all members, 
                whether they are beginners or advanced developers.  To keep our members motivated, we&apos;ll implement 
                progress tracking features that allow users to monitor their advancement through courses and tutorials. 
                This will help them set goals and celebrate their achievements.
                </p><p id='project-text'>
                If you&apos;re ready to make a difference and help us build CodeDevils Academy, we invite you to apply. 
                Let&apos;s create a premier learning platform that reflects our commitment to education and community. 
                Your journey with CodeDevils starts here—let&apos;s make something great!
                </p>
            </>
        ), (
            <div key={3} id='project-goals' >
                <div>
                    <div />
                    <h2>Current Project Goals</h2>
                </div>
                <div>
                    <ul>
                        <li>Implement a content player component</li>
                        <li>Create user authentication systems</li>
                        <li>Finalize front end and admin panel</li>
                    </ul>
                    <Hammer />
                </div>
            </div>
        ), (
            <div key={4} id='project-stack'>
                <Link href="https://www.typescriptlang.org/" target='_blank'>
                    { getSVG({ svgID: 3 }) }
                </Link>
                <Link href="https://nextjs.org/" target='_blank'>
                    { getSVG({ svgID: 2 }) }
                </Link>
                <Link href="https://www.mongodb.com" target='_blank'>
                    { getSVG({ svgID: 4 }) }
                </Link>
            </div>
        ), (
            <div key={5} id='git-monitor'>
                <div>GitHub Activity</div>
                <div></div>
            </div>
        ), (
            <div key={6} id='project-images'>
                <Image 
                    src={`/assets/projects/${projectID}/project-image-1.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-2.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-3.png`}
                    alt='project image'
                    width={300}
                    height={200} />
            </div>
        ), (
            <div key={7} id='project-team'>
                <div>
                    <div />
                    <h2>Project Team</h2>
                </div>
                <div>
                    <Image 
                        src={ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'image'}) }
                        alt='Project Leader&apos;s photo'
                        width={200}
                        height={200}
                        />
                    <div>
                    <h2>{ getMember({memberID:  projectTeams[projectID][0]?.[0] as MemberID, memberData: 'name'}) }</h2>
                    <p>{ getMember({memberID:  projectTeams[projectID][0]?.[0] as MemberID, memberData: 'bio'}) }</p>
                    </div>
                </div>
                <div>
                    { projectTeams[projectID][1] ? 
                        ( projectTeams[projectID].map(([member, link], index) => (
                            index > 0 ? (
                            <div key={index}>
                                { link ? <a key={member} href={link} target='_blank'>{member}</a>
                                    : <p key={member}>{member}</p> }
                            </div> ) : <></>
                        ))) : <><div /><h3>No contributors just yet.  Be the first to apply!</h3></>}
                </div>
            </div>
        )],


        website: [(
            <div key={0} id='project-title'>
                <h1>CodeDevils Website</h1>
                <div>
                    <PanelsTopLeft />
                </div>
                <div>
                    <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                </div>
            </div>
        ), (
            <p key={1} id='project-description'>Our rapidly-evolving website. New features and tools are constantly being added!</p>
        ), (
            <>
                <p id='project-text'>
                This is the codedevils.org project; the website you&apos;re currently looking at.  With many features 
                planned, and with an active rebrand going on, we&apos;ll need some talented hands to keep this ship running.  
                This is considered one of our core projects, meaning it is essential to the CodeDevils brand and 
                identity.  We build our websites in Next.js and Typescript.  Next.js is a powerful framework for 
                JavaScript/TypeScript that handles frontend and backend deployments.  One primary focus of the 
                website&apos;s design is to keep the code maintainable, manageable, and readable.  We will not be building 
                web pages that are simply hard-coded in HTML, but are dynamic and rely on backend data structures to 
                function.
                </p><p id='project-text'>
                We have a lot of fun features planned, many of them are just to show off our skills as programmers, 
                but we&apos;re here to advertise our organization and put our best foot forward to outside companies, 
                prospective contributors, and to the university we stand behind.  Our project is dedicated not to 
                being flashy, but to being robust and respectable to the community at large.  We aim to create a 
                website that is not just functional but also resonates with our audience, reflecting our dedication 
                to quality and professionalism.
                </p><p id='project-text'>
                We&apos;re seeking contributors who share our passion for technology and community. Whether you&apos;re a 
                seasoned developer, a creative designer, or even someone wanting to dip their toes into web design 
                and learn from us, you&apos;re in the right place.  If you&apos;re ready to make a meaningful contribution, 
                we invite you to join us. Whether you can dedicate a few hours or want to take on a larger role, 
                your efforts will help shape the future of CodeDevils.org. This is more than just coding; it&apos;s 
                about building a resource that empowers our community and showcases our commitment to excellence.
                </p><p id='project-text'>
                Let&apos;s work together to create a website that embodies the spirit of CodeDevils—dynamic, robust, 
                and community-focused. Your journey with us starts here. Let&apos;s make it remarkable!
                </p>
            </>
        ), (
            <div key={3} id='project-goals' >
                <div>
                    <div />
                    <h2>Current Project Goals</h2>
                </div>
                <div>
                    <ul>
                        <li>Add and improve features using service API&apos;s</li>
                        <li>Redesign the website&apos;s colors and design to align with CodeDevils rebranding</li>
                        <li>Rewrite and redesign the website&apos;s content</li>
                    </ul>
                    <Hammer />
                </div>
            </div>
        ), (
            <div key={4} id='project-stack'>
                <Link href="https://www.typescriptlang.org/" target='_blank'>
                    { getSVG({ svgID: 3 }) }
                </Link>
                <Link href="https://nextjs.org/" target='_blank'>
                    { getSVG({ svgID: 2 }) }
                </Link>
                <Link href="https://www.mongodb.com" target='_blank'>
                    { getSVG({ svgID: 4 }) }
                </Link>
            </div>
        ), (
            <div key={5} id='git-monitor'>
                <div>GitHub Activity</div>
                <div></div>
            </div>
        ), (
            <div key={6} id='project-images'>
                <Image 
                    src={`/assets/projects/${projectID}/project-image-1.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-2.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-3.png`}
                    alt='project image'
                    width={300}
                    height={200} />
            </div>
        ), (
            <div key={7} id='project-team'>
                <div>
                    <div />
                    <h2>Project Team</h2>
                </div>
                <div>
                    <Image 
                        src={ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'image'}) }
                        alt='Project Leader&apos;s photo'
                        width={200}
                        height={200}
                        />
                    <div>
                    <h2>{ getMember({memberID:  projectTeams[projectID][0]?.[0] as MemberID, memberData: 'name'}) }</h2>
                    <p>{ getMember({memberID:  projectTeams[projectID][0]?.[0] as MemberID, memberData: 'bio'}) }</p>
                    </div>
                </div>
                <div>
                { projectTeams[projectID][1] ? 
                        ( projectTeams[projectID].map(([member, link], index) => (
                            index > 0 ? (
                            <div key={index}>
                                { link ? <a key={member} href={link} target='_blank'>{member}</a>
                                    : <p key={member}>{member}</p> }
                            </div> ) : <></>
                        ))) : <><div /><h3>No contributors just yet.  Be the first to apply!</h3></>}
                </div>
            </div>
        )],


        gamedev: [(
            <div key={0} id='project-title'>
                <h1>CodeDevils GameDev</h1>
                <div>
                    <Gamepad2/>
                </div>
                <div>
                    <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                </div>
            </div>
        ), (
            <p key={1} id='project-description'>A series of Game Development projects to implement in various places around CodeDevils!</p>
        ), (
            <>
                <p id='project-text'>
                Do you want to learn more about game development? Then the CD-GameDev project is for you. 
                We have decided to use the Rust programming language, a growingly popular, high-performance, 
                multi-purpose programming language that is sure to be a great tool to add to your skill set. 
                And although most games tend to use object oriented programming, we have opted to use a different 
                paradigm that is also growing more popular in the game dev world; Entity Component System (ECS). 
                This paradigm allows for major performance gains in compute heavy games, and also offers a different 
                way to think about objects in our game by separating data and systems. For this endeavor, we will be
                using the Bevy ECS framework, one of the best on the market.
                </p><p id='project-text'>
                One of the main drivers behind the decision of using Rust + Bevy, was that it is open-source, and 
                is turtles all the way down. In other words, everything is Rust from top to bottom, allowing us 
                to delve deep into how the Bevy ECS framework, and all its accompanying tools,  work under the hood. 
                We want to teach you about all the components that goes into creating and running a game, and traditional 
                game engines usually abstract all those details away. But that is not to say that Bevy is not easy to use. 
                After some practice, we believe you&apos;ll find that it is incredibly ergonomic and user friendly, thanks to 
                the amazing engineers contributing to the Bevy project.
                </p><p id='project-text'>
                The game itself will be inspired from the <span>
                    <a id='info-link' href='https://en.wikipedia.org/wiki/Metroidvania' target='_blank'>
                    metroidvania genre
                    </a>
                </span>, but might take elements from other genres as 
                well. It will be a 2D, side-view game, with a pixel art style. The features and systems we will implement 
                will evolve over time as we prototype and progress together. By joining this project, you won&apos;t just be 
                coding what we tell you to code, we also want you to be part of the discussion about where the game is headed 
                in all of its aspect, would it be features and systems, or story and lore.
                </p><p id='project-text'>
                The journey will be a challenging one, but will be very rewarding as well. You might have to learn quite 
                a few things before you can get started contributing, especially if you never coded in Rust or are new 
                to game development, but we will be there every step of the way, and we have curated a selection of 
                resources to help you get started using Rust and Bevy, so that you can start your game dev journey 
                with us as fast as possible. From things like how to handle asset loading, animations, handling audio, 
                to how game handles physics and graphics rendering, you&apos;ll come out of this project with a greater 
                understanding of all that comes into play when creating games.
                </p>
            </>
        ), (
            <div key={3} id='project-goals' >
                <div>
                    <div />
                    <h2>Current Project Goals</h2>
                </div>
                <div>
                    <ul>
                        <li>Create systems and plugins to facilitate the creation of the game</li>
                        <li>Program and integrate multiple gameplay systems together</li>
                        <li>Publish the game on a game distribution platform</li>
                    </ul>
                    <Hammer />
                </div>
            </div>
        ), (
            <div key={4} id='project-stack'>
                <Link href="https://www.rust-lang.org" target='_blank'>
                    { getSVG({ svgID: 0 }) }
                </Link>
                <Link href="https://bevyengine.org" target='_blank'>
                    { getSVG({ svgID: 1 }) }
                </Link>
            </div>
        ), (
            <div key={5} id='git-monitor'>
                <div>GitHub Activity</div>
                <div></div>
            </div>
        ), (
            <div key={6} id='project-images'>
                <Image 
                    src={`/assets/projects/${projectID}/project-image-1.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-2.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-3.png`}
                    alt='project image'
                    width={300}
                    height={200} />
            </div>
        ), (
            <div key={7} id='project-team'>
                <div>
                    <div />
                    <h2>Project Team</h2>
                </div>
                <div>
                    <Image 
                        src={ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'image'}) }
                        alt='Project Leader&apos;s photo'
                        width={200}
                        height={200}
                        />
                    <div>
                    <h2>{ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'name'}) }</h2>
                    <p>{ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'bio'}) }</p>
                    </div>
                </div>
                <div>
                { projectTeams[projectID][1] ? 
                        ( projectTeams[projectID].map(([member, link], index) => (
                            index > 0 ? (
                            <div key={index}>
                                { link ? <a key={member} href={link} target='_blank'>{member}</a>
                                    : <p key={member}>{member}</p> }
                            </div> ) : <></>
                        ))) : <><div /><h3>No contributors just yet.  Be the first to apply!</h3></>}
                </div>
            </div>
        )],
        mobile: [(
            <div key={0} id='project-title'>
                <h1>CodeDevils Mobile</h1>
                <div>
                    <Smartphone />
                </div>
                <div>
                    <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                </div>
            </div>
        ), (
            <p key={1} id='project-description'>Our Mobile app! Built for iOS and Android, helps contributors keep up to date with projects and keeps members aware of events!</p>
        ), (
            <>
                <p id='project-text'>
                Welcome to the CodeDevils Mobile project page! As part of our commitment to fostering a community of 
                developers, we are excited to announce the development of our mobile app, CodeDevils Mobile. This project 
                is designed to create a welcoming space for anyone interested in mobile development, whether you&apos;re a 
                beginner looking to learn or an experienced developer eager to share your knowledge.
                </p><p id='project-text'>
                With CodeDevils Mobile, our vision is to build an inclusive platform that encourages exploration and 
                collaboration in the world of mobile app development. We recognize that mobile technology is an integral 
                part of our lives, and we want to provide a space where members can come together to learn, share ideas, 
                and showcase their projects. By utilizing Dart/Flutter, Swift, and Kotlin, we aim to create a versatile 
                application that caters to both iOS and Android platforms.
                </p><p id='project-text'>
                CodeDevils Mobile, in its current vision, will serve primarily as a community platform for CodeDevils 
                events, Academy content, and have a contributor platform to stay up to date with the latest project 
                announcements and changes.  Additional features will come as the project unfolds.  We have a lot of 
                excitement for this project and we&apos;re very excited to see what it becomes.
                </p><p id='project-text'>
                If you have a particular interest or passion for mobile development, we encourage you to get started 
                early on this project and make your mark!  Your influence on the direction and execution of this project 
                will be invaluable to both your career and to the project as a whole.
                </p>
            </>
        ), (
            <div key={3} id='project-goals' >
                <div>
                    <div />
                    <h2>Current Project Goals</h2>
                </div>
                <div>
                    <ul>
                        <li>Create systems and plugins to facilitate the creation of the game</li>
                        <li>Program and integrate multiple gameplay systems together</li>
                        <li>Publish the game on a game distribution platform</li>
                    </ul>
                    <Hammer />
                </div>
            </div>
        ), (
            <div key={4} id='project-stack'>
                <Link href="https://flutter.dev" target='_blank'>
                    { getSVG({ svgID: 5 }) }
                </Link>
                <Link href="https://dart.dev" target='_blank'>
                    { getSVG({ svgID: 6 }) }
                </Link>
                <Link href="https://kotlinlang.org" target='_blank'>
                    { getSVG({ svgID: 7 }) }
                </Link>
                <Link href="https://www.swift.org" target='_blank'>
                    { getSVG({ svgID: 8 }) }
                </Link>
            </div>
        ), (
            <div key={5} id='git-monitor'>
                <div>GitHub Activity</div>
                <div></div>
            </div>
        ), (
            <div key={6} id='project-images'>
                <Image 
                    src={`/assets/projects/${projectID}/project-image-1.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-2.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-3.png`}
                    alt='project image'
                    width={300}
                    height={200} />
            </div>
        ), (
            <div key={7} id='project-team'>
                <div>
                    <div />
                    <h2>Project Team</h2>
                </div>
                <div>
                    <Image 
                        src={ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'image'}) }
                        alt='Project Leader&apos;s photo'
                        width={200}
                        height={200}
                        />
                    <div>
                    <h2>{ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'name'}) }</h2>
                    <p>{ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'bio'}) }</p>
                    </div>
                </div>
                <div>
                { projectTeams[projectID][1] ? 
                        ( projectTeams[projectID].map(([member, link], index) => (
                            index > 0 ? (
                            <div key={index}>
                                { link ? <a key={member} href={link} target='_blank'>{member}</a>
                                    : <p key={member}>{member}</p> }
                            </div> ) : <></>
                        ))) : <h3>No contributors just yet.  Be the first to apply!</h3>}
                </div>
            </div>
        )],
        scraper: [(
            <div key={0} id='project-title'>
                <h1>CodeDevils Scraper</h1>
                <div>
                    <FileOutput />
                </div>
                <div>
                    <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                </div>
            </div>
        ), (
            <p key={1} id='project-description'>A job post scraping tool built to keep our members up to date with the latest developments in the job market!</p>
        ), (
            <>
                <p id='project-text'>
                CD-Scraper is a project designed to teach the fundamentals of web scaping and the tools to make that happen. 
                The goal is to design a system for scraping job posting from various websites and serving the collected data 
                through an API build using SpringBoot. As this project is going to be based fully in Java, it is friendly to 
                those that are just starting off their programming journey. 
                </p><p id='project-text'>
                Throughout this project, contributors will have the opportunity to collaborate with peers, share insights, 
                and learn from each other. This team-oriented approach fosters a supportive environment where beginners can 
                ask questions and gain confidence in their coding abilities. You&apos;ll not only develop your technical skills 
                but also engage in problem-solving and critical thinking as you navigate the challenges of web scraping 
                together.
                </p><p id='project-text'>    
                Each contributor will be responsible for implementing a script to scrape different job posting websites 
                (i.e. Indeed, LinkedIn). Through this process, you will, hopefully, have a grasp on the some fundamental 
                HTML parsing. 
                </p><p id='project-text'>
                In this project, you will NOT be working with APIs or any web related technology. Those will be managed 
                by staff to ensure this project is easy to pick up for those new to programming, but wanting to contribute 
                to a more complex project outside of school assignments. Also, you will NOT be working with any data and 
                their persistence (i.e. databases).
                </p><p id='project-text'>
                If you want to apply what you have learned about Java in class into a project that is more tangible, 
                join our beginner-friendly project by filling out our application. Your project lead will reach out to you 
                within the week. Let&apos;s learn to code by building something meaningful and fun!
                </p>
            </>
        ), (
            <div key={3} id='project-goals' >
                <div>
                    <div />
                    <h2>Current Project Goals</h2>
                </div>
                <div>
                    <ul>
                        <li>Learn about web scraping</li>
                        <li>Take Java skills from school and implement them into a tangible project</li>
                        <li>Gain confidence to start your own personal projects</li>
                    </ul>
                    <Hammer />
                </div>
            </div>
        ), (
            <div key={4} id='project-stack'>
                <Link href="https://www.java.com/en/" target='_blank'>
                    { getSVG({ svgID: 9 }) }
                </Link>
            </div>
        ), (
            <div key={5} id='git-monitor'>
                <div>GitHub Activity</div>
                <div></div>
            </div>
        ), (
            <div key={6} id='project-images'>
                <Image 
                    src={`/assets/projects/${projectID}/project-image-1.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-2.png`}
                    alt='project image'
                    width={300}
                    height={200} />
                <Image 
                    src={`/assets/projects/${projectID}/project-image-3.png`}
                    alt='project image'
                    width={300}
                    height={200} />
            </div>
        ), (
            <div key={7} id='project-team'>
                <div>
                    <div />
                    <h2>Project Team</h2>
                </div>
                <div>
                    <Image 
                        src={ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'image'}) }
                        alt='Project Leader&apos;s photo'
                        width={200}
                        height={200}
                        />
                    <div>
                    <h2>{ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'name'}) }</h2>
                    <p>{ getMember({memberID: projectTeams[projectID][0]?.[0] as MemberID, memberData: 'bio'}) }</p>
                    </div>
                </div>
                <div>
                { projectTeams[projectID][1] ? 
                        ( projectTeams[projectID].map(([member, link], index) => (
                            index > 0 ? (
                            <div key={index}>
                                { link ? <a key={member} href={link} target='_blank'>{member}</a>
                                    : <p key={member}>{member}</p> }
                            </div> ) : <></>
                        ))) : <h3>No contributors just yet.  Be the first to apply!</h3>}
                </div>
            </div>
        )],

    }

    if (!(projectID in content)) { throw new Error('Invalid Project ID'); }
    if (contentID < 0 || contentID >= content[projectID].length) { throw new Error('Invalid Content ID'); }


    return (content[projectID][contentID]);

}

const getContent = ({projectID, contentID}:{
    projectID: ProjectID | 'all',
    contentID: number
}) => {
    if (projectID === 'all') { return projectIDs.map(id => processContent({projectID: id, contentID })); }
    return processContent({projectID: projectID, contentID: contentID});
}

export default getContent;

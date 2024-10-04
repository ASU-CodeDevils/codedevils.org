import { Gamepad2, Hammer, PanelsTopLeft } from 'lucide-react';
import './project-styles.css'
import getSVG from '~/public/svg-data';
import Link from 'next/link';
import Image from 'next/image'
import ApplyButton from '~/src/app/components/Projects/ApplyButton';
import { getMember } from '~/src/app/components/members';
import { MemberID } from '~/src/app/components/members';


export type ProjectID = 'academy' | 
                        'website' | 
                        'gamedev' | 
                        'mobile'  | 
                        'scraper' ;


export const projectApplicationLinks = {
    academy: 'https://docs.google.com/forms/d/e/1FAIpQLSdO_e-4Sl1JtNxqP674A8ZFL57gcwEu5piLhicXDE44rw9KDQ/viewform?usp=sf_link',
    website: 'https://docs.google.com/forms/d/e/1FAIpQLSd5DWM45tlvF0rzjzHmhI3nRrU5EzuztpMrHMrRwAiXdGl-jg/viewform?usp=sf_link',
    gamedev: 'https://docs.google.com/forms/d/e/1FAIpQLSdkWDK_idZLQJ8X98-9iCYxnwTF03ji3QRdzwiU5wz8d3h8hg/viewform?usp=sf_link',
    mobile:  'https://docs.google.com/forms/d/e/1FAIpQLSd--0dToZAGV4MThGzuiJuSy_GCmFIoPjkgRjAbBPnk0B6MrA/viewform?usp=sf_link',
    scraper: 'https://docs.google.com/forms/d/e/1FAIpQLSfJHHugJUM3Sc_r_A7nCDjfSyaIXTepd90raUZ_zEwVZ_mEMg/viewform?usp=sf_link',
    }


    
const projectTeams = {
    academy: [['pita', '']
            ],
    website: [  ['pita', ''],
                ['David Fales', '']
            ],
    gamedev: [  ['remi', ''],
                ['Autumn O', ''],
                ['Pita Sherwood', 'https://pita.blue'],
                ['Contributor 1', ''], 
                ['Contributor 2', ''], 
                ['Contributor 3', ''], 
                ['Contributor 4', ''], 
                ['Contributor 5', ''], 
                ['Contributor 6', ''], 
                ['Contributor 7', ''], 
                ['Contributor 8', ''], 
                ['Contributor 9', '']
            ],
    mobile: [['pita', '']
            ],
    scraper: [['frankie', '']
            ]
}



    const getContent = ({projectID, contentID}:{
        projectID: ProjectID,
        contentID: number,
    }) => {
    
    const content = {
        academy: [(
            <div key={0} id='project-title'>
                <h1>CodeDevils Academy</h1>
                <div>
                    <PanelsTopLeft />
                </div>
                <div>
                    <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                </div>
            </div>
        ), (
            <>
                <p id='project-text'>
                The sister website to CodeDevils.org, CodeDevils Academy is our content management and learning 
                platform.  We’re excited to announce the development of our dedicated learning platform designed 
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
                whether they are beginners or advanced developers.  To keep our members motivated, we’ll implement 
                progress tracking features that allow users to monitor their advancement through courses and tutorials. 
                This will help them set goals and celebrate their achievements.
                </p><p id='project-text'>
                If you’re ready to make a difference and help us build CodeDevils Academy, we invite you to apply. 
                Let’s create a premier learning platform that reflects our commitment to education and community. 
                Your journey with CodeDevils starts here—let’s make something great!
                </p>
            </>
        ), (
            <div key={2} id='project-goals' >
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
            <div key={3} id='project-stack'>
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
            <div key={4} id='git-monitor'>
                <div>GitHub Activity</div>
                <div></div>
            </div>
        ), (
            <div key={5} id='project-images'>
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
            <div key={6} id='project-team'>
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
                            <div>
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
            <>
                <p id='project-text'>
                This is the codedevils.org project; the website you’re currently looking at.  With many features 
                planned, and with an active rebrand going on, we’ll need some talented hands to keep this ship running.  
                This is considered one of our core projects, meaning it is essential to the CodeDevils brand and 
                identity.  We build our websites in Next.js and Typescript.  Next.js is a powerful framework for 
                JavaScript/TypeScript that handles frontend and backend deployments.  One primary focus of the 
                website’s design is to keep the code maintainable, manageable, and readable.  We will not be building 
                web pages that are simply hard-coded in HTML, but are dynamic and rely on backend data structures to 
                function.
                </p><p id='project-text'>
                We have a lot of fun features planned, many of them are just to show off our skills as programmers, 
                but we’re here to advertise our organization and put our best foot forward to outside companies, 
                prospective contributors, and to the university we stand behind.  Our project is dedicated not to 
                being flashy, but to being robust and respectable to the community at large.  We aim to create a 
                website that is not just functional but also resonates with our audience, reflecting our dedication 
                to quality and professionalism.
                </p><p id='project-text'>
                We’re seeking contributors who share our passion for technology and community. Whether you're a 
                seasoned developer, a creative designer, or even someone wanting to dip their toes into web design 
                and learn from us, you’re in the right place.  If you’re ready to make a meaningful contribution, 
                we invite you to join us. Whether you can dedicate a few hours or want to take on a larger role, 
                your efforts will help shape the future of CodeDevils.org. This is more than just coding; it’s 
                about building a resource that empowers our community and showcases our commitment to excellence.
                </p><p id='project-text'>
                Let’s work together to create a website that embodies the spirit of CodeDevils—dynamic, robust, 
                and community-focused. Your journey with us starts here. Let’s make it remarkable!
                </p>
            </>
        ), (
            <div key={2} id='project-goals' >
                <div>
                    <div />
                    <h2>Current Project Goals</h2>
                </div>
                <div>
                    <ul>
                        <li>Add and improve features using service API's</li>
                        <li>Redesign the website's colors and design to align with CodeDevils rebranding</li>
                        <li>Rewrite and redesign the website's content</li>
                    </ul>
                    <Hammer />
                </div>
            </div>
        ), (
            <div key={3} id='project-stack'>
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
            <div key={4} id='git-monitor'>
                <div>GitHub Activity</div>
                <div></div>
            </div>
        ), (
            <div key={5} id='project-images'>
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
            <div key={6} id='project-team'>
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
                    { projectTeams[projectID].map(([member, link], index) => (
                        index > 0 ? (
                        <div>
                            { link ? <a key={member} href={link} target='_blank'>{member}</a>
                                   : <p key={member}>{member}</p> }
                        </div> ) : <></>
                    ))}
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
            <div key={2} id='project-goals' >
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
            <div key={3} id='project-stack'>
                <Link href="https://www.rust-lang.org" target='_blank'>
                    { getSVG({ svgID: 0 }) }
                </Link>
                <Link href="https://bevyengine.org" target='_blank'>
                    { getSVG({ svgID: 1 }) }
                </Link>
            </div>
        ), (
            <div key={4} id='git-monitor'>
                <div>GitHub Activity</div>
                <div></div>
            </div>
        ), (
            <div key={5} id='project-images'>
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
            <div key={6} id='project-team'>
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
                    { projectTeams[projectID].map(([member, link], index) => (
                        index > 0 ? (
                        <div>
                            { link ? <a key={member} href={link} target='_blank'>{member}</a>
                                   : <p key={member}>{member}</p> }
                        </div> ) : <></>
                    ))}
                </div>
            </div>
        )],
        mobile: [],
        scraper: [],

    }

    if (!(projectID in content)) { throw new Error('Invalid Project ID'); }
    if (contentID < 0 || contentID >= content[projectID].length) { throw new Error('Invalid Content ID'); }


    return (content[projectID][contentID]);

}

export default getContent;
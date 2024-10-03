import { Gamepad2 } from 'lucide-react';
import './project-styles.css'
import getSVG from '~/public/svg-data';
import Link from 'next/link';
import Image from 'next/image'
import ApplyButton from '~/src/app/components/Projects/ApplyButton';


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

    const getContent = ({projectID, contentID}:{
        projectID: ProjectID,
        contentID: number,
    }) => {
    
    const content = {
        academy: [],
        website: [],
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
                <ul>
                    <li>Create systems and plugins to facilitate the creation of the game</li>
                    <li>Program and integrate multiple gameplay systems together</li>
                    <li>Publish the game on a game distribution platform</li>
                </ul>

                <ApplyButton project={projectID} >Join the Project!</ApplyButton>
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
        )],
        mobile: [],
        scraper: [],

    }

    if (!(projectID in content)) { throw new Error('Invalid Project ID'); }
    if (contentID < 0 || contentID >= content[projectID].length) { throw new Error('Invalid Content ID'); }


    return (content[projectID][contentID]);

}

export default getContent;
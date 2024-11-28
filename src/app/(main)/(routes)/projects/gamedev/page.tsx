import '../project-page-styles.css'
import { MaxWidthWrapper } from "src/app/components/ui/ContentWrappers"
import ApplyButton from "~/src/app/components/Projects/ApplyButton"
import getContent from "../content"
import { gitreporslinks } from "../content"

const Home = () => {

    const projectID = "gamedev";


    return (
        <>
            <div className="h-24 w-full" />
            
            <MaxWidthWrapper className="relative mt-16">

            {getContent({ projectID: projectID, contentID: 0})}  {/* Title */}
                <div className="relative px-1">
                    {getContent({ projectID: projectID, contentID: 4})}  {/* Stack */}
                    {getContent({ projectID: projectID, contentID: 5})}  {/* Git Monitor (large screens only) */}
                    {getContent({ projectID: projectID, contentID: 2})}  {/* Main Content */}   
                </div>
                {getContent({ projectID: projectID, contentID: 6})}  {/* Project Images */}
                {getContent({ projectID: projectID, contentID: 3})}  {/* Project Goals */}
                {getContent({ projectID: projectID, contentID: 7})}  {/* Project Team */}

                <div className="flex justify-center md:justify-start">
                    <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                </div>

                <div className="flex justify-center md:justify-end items-center mt-3 md:mt-[-77px] mb-10">
                    <a href={gitreporslinks.gamedev}
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="bg-asumaroon-700 text-white text-lg font-semibold py-5 px-10 rounded-2xl shadow-md shadow-zinc-500 duration-300 hover:bg-asumaroon-600">
                    View GitHub Repository
                    </a>
                </div>

            </MaxWidthWrapper>
        </>
    )
}

export default Home
import { MaxWidthWrapper } from "src/app/components/ui/ContentWrappers"
import ApplyButton from "~/src/app/components/Projects/ApplyButton"
import getContent from "../content"

const Home = () => {

    const projectID = "mobile";


    return (
        <>
            <div className="h-24 w-full" />
            
            <MaxWidthWrapper className="relative mt-16">

                {getContent({ projectID: projectID, contentID: 0})}  {/* Title */}
                <div className="relative px-1">
                    {getContent({ projectID: projectID, contentID: 3})}  {/* Stack */}
                    {getContent({ projectID: projectID, contentID: 4})}  {/* Git Monitor (large screens only) */}
                    {getContent({ projectID: projectID, contentID: 1})}  {/* Main Content */}   
                </div>
                {getContent({ projectID: projectID, contentID: 5})}  {/* Project Images */}
                {getContent({ projectID: projectID, contentID: 2})}  {/* Project Goals */}
                {getContent({ projectID: projectID, contentID: 6})}  {/* Project Team */}

                <div className="flex justify-center md:justify-start">
                    <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                </div>

            </MaxWidthWrapper>
        </>
    )
}

export default Home
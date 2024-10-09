import '../project-page-styles.css';
import { MaxWidthWrapper } from "src/app/components/ui/ContentWrappers"
import ApplyButton from "~/src/app/components/Projects/ApplyButton"
import getContent from "../content"

const Home = () => {

    const projectID = "website";


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

            </MaxWidthWrapper>
        </>
    )
}

export default Home
import { MaxWidthWrapper } from "src/app/components/ui/ContentWrappers"
import ApplyButton from "~/src/app/components/Projects/ApplyButton"
import getContent from "../content"

const Home = () => {

    const projectID = "gamedev";


    return (
        <>
            <div className="h-24 w-full" />
            
            <MaxWidthWrapper className="relative mt-16">

                {getContent({ projectID: projectID, contentID: 0})}  {/* Title */}
                <div className="relative px-1">
                    {getContent({ projectID: projectID, contentID: 3})}  {/* Stack */}
                    {getContent({ projectID: projectID, contentID: 4})}  {/* Git Monitor */}
                    {getContent({ projectID: projectID, contentID: 1})}  {/* Main Content */}   
                </div>
                {getContent({ projectID: projectID, contentID: 5})}  {/* Project Images */}
                {getContent({ projectID: projectID, contentID: 2})}  {/* Project Goals */}
                
            </MaxWidthWrapper>
        </>
    )
}

export default Home
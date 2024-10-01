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
                {getContent({ projectID: projectID, contentID: 1})}  {/* Main Content */}
                {getContent({ projectID: projectID, contentID: 2})}  {/* Project Goals */}

                
                <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                
            </MaxWidthWrapper>
        </>
    )
}

export default Home
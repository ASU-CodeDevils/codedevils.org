import '../project-styles.css';
import { MaxWidthWrapper } from "src/app/components/ui/ContentWrappers"
import ApplyButton from "~/src/app/components/Projects/ApplyButton"
import getContent from "../content"
import { gitRepoLinks} from "../content"
import { ExternalLink } from 'lucide-react';

const Home = () => {

    const projectID = "website";


    return (
        <>
            <div className="h-24 w-full" />
            
            <MaxWidthWrapper className="relative mt-16">

                {getContent({ projectID: projectID, contentID: 0, pageID: "project-page"})}  {/* Title */}
                <div className="relative px-1">
                    {getContent({ projectID: projectID, contentID: 4, pageID: "project-page"})}  {/* Stack */}
                    {getContent({ projectID: projectID, contentID: 5, pageID: "project-page"})}  {/* Git Monitor (large screens only) */}
                    {getContent({ projectID: projectID, contentID: 2, pageID: "project-page"})}  {/* Main Content */}   
                </div>
                {getContent({ projectID: projectID, contentID: 6, pageID: "project-page"})}  {/* Project Images */}
                {getContent({ projectID: projectID, contentID: 3, pageID: "project-page"})}  {/* Project Goals */}
                {getContent({ projectID: projectID, contentID: 7, pageID: "project-page"})}  {/* Project Team */}

                <div className="flex justify-center md:justify-start">
                    <ApplyButton project={projectID} >Join the Project!</ApplyButton>
                </div>

                <div className="git-link-container">
                    <a href={gitRepoLinks.website} target="_blank" rel="noreferrer noopener" className="git-link">
                        View GitHub Repository
                        <ExternalLink className="ml-2 w-5 h-5" />
                    </a>
                </div>

            </MaxWidthWrapper>
        </>
    )
}

export default Home
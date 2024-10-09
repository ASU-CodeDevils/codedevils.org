import Link from "next/link"
import { projectApplicationLinks } from "../../(main)/(routes)/projects/content"
import { ProjectID } from "../../(main)/(routes)/projects/content"


const ApplyButton = ({children, className, project}:{
    children?: React.ReactNode
    className?: string
    project: ProjectID
}) => {

    const href = projectApplicationLinks[project];

    return (
        <Link href={href}
            target="_blank"
            className={`${className} flex group justify-center items-center rounded-2xl text-xl w-48 h-16 mb-4
                hover:bg-gradient-to-br hover:from-asumaroon-600 hover:to-asumaroon-800 bg-asumaroon
                cursor-pointer shadow-md shadow-zinc-500`}>
                <p className="group group-hover:underline text-white">
                    {children}</p>
        </Link>
    )
}

export default ApplyButton
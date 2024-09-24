import { Section } from "~/components/ui/sections"
import Link from 'next/link'



const Home = () => {


    return (
        <>
            <div className="h-24 w-full" />
            
            <Section>

                <h1 className="text-4xl font-bold">CodeDevils Game Dev Projects</h1>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdkWDK_idZLQJ8X98-9iCYxnwTF03ji3QRdzwiU5wz8d3h8hg/viewform?usp=sf_link"
                    target='_blank'
                    className="flex justify-center items-center rounded-full text-xl bg-gradient-to-br 
                        from-maroon/95 to-maroon w-48 h-20 cursor-pointer">
                    <p className="hover:underline text-white">Apply Here!</p>
                </Link>
            </Section>
        </>
    )
}

export default Home
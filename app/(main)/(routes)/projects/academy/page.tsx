import { Section } from "~/components/ui/sections"
import Link from 'next/link'


const Home = () => {


    return (
        <>
            <div className="h-24 w-full" />
            <Section>

                <h1 className="text-4xl font-bold">CodeDevils Academy</h1>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdO_e-4Sl1JtNxqP674A8ZFL57gcwEu5piLhicXDE44rw9KDQ/viewform?usp=sf_link"
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
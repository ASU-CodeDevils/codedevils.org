import { Section } from "src/app/components/ui/ContentWrappers"
import Link from 'next/link'


const Home = () => {


    return (
        <>
            <div className="h-24 w-full" />
            <Section>
                <h1 className="text-4xl font-bold">CodeDevils Job Posting Scraper</h1>

                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfJHHugJUM3Sc_r_A7nCDjfSyaIXTepd90raUZ_zEwVZ_mEMg/viewform?usp=sf_link"
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
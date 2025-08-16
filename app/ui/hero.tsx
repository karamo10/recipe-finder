import Image from "next/image"
import Link from "next/link"

export default function Hero() {

    return (
        <section className=" flex items-center pt-36 mb-7">
            <div className="w-3/4 mx-auto flex items-center flex-col">
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-7xl font-bold">Healthy meals, zero fuss</h1>
                    <p className="text-lg w-[70%] text-center">
                        Discover eight quick, whole-food recipes that you can cook tonight no processed junk, no guess work.
                    </p>
                    <Link href={'/'} className="bg-black text-white px-6 py-3 rounded-md font-bold mt-1" >
                        Start exploring
                    </Link>
                </div>
                <Image
                    src={'/images/hero-img.jpg'}
                    alt={'hero image'}
                    className="w-full mt-16 object-cover h-[600px] rounded-2xl"
                    width={100}
                    height={100}
                />
            </div>
        </section>
    )
}
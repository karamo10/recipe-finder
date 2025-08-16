import Image from "next/image";

export default function Build() {

    return (
        <section className="mb-12">
            <div className="w-3/4 mx-auto grid grid-cols-2 items-center gap-6">
                <div className="space-y-7">
                    <h1 className="text-4xl font-bold text-start">
                        Built for real life
                    </h1>
                    <p className="text-lg/relaxed w-[90%]">
                        Cooking shouldn't be complicated. The reciped comes in under <span className="text-orange-500">30 min</span> of active time, fit busy schedules, and taste good enough to repeat.
                    </p>
                    <p className="text-lg/relaxed w-[90%]">
                        Whether you're new in to the kitchen or just need fresh ideas, we're got you covered.
                    </p>
                </div>
                <Image src={'/images/hero-img.jpg'} alt={'Built image'} width={200} height={200} className="w-full object-cover h-[500px] rounded-2xl" />
            </div>
        </section>
    )
}
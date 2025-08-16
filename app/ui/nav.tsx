import Link from "next/link"
import Button from "./browse-btn"

export default function NavBar() {

    return (
        <section className=" flex items-center justify-around h-20 shadow">
            <div>
                <h1 className="text-lg font-bold">Healthy recipe finder</h1>
            </div>
            <div className="flex items-center gap-8 ">
                <Link href={'/'} className="text-lg border-b-2 border-b-amber-500">Home</Link>
                <Link href={'/'} className="text-lg border-b-2 border-b-neutral-50  hover:border-b-2 hover:border-b-amber-500">About</Link>
                <Link href={'/'} className="text-lg border-b-2 border-b-neutral-50 hover:border-b-2 hover:border-b-amber-500">Recipes</Link>
            </div>
            <div>
                <Button />
            </div>
        </section>
    )
}
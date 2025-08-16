import Link from "next/link"

export default function Button() {

    return (
        <Link href={'/'} className="bg-black text-white p-3 rounded-md font-bold">Browser recipes</Link>
    )
}
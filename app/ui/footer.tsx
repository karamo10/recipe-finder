import Button from "./browse-btn"

export default function Footer() {

    return (
        <section className="mb-10">
            <div className="w-3/4 mx-auto bg-gray-100 flex flex-col items-center justify-center py-28 rounded-md space-y-5 shadow">
                <h1 className="text-4xl font-bold">Ready to cook smarter?</h1>
                <p className="text-lg/relaxed">Hit the button, pick a recipe, and get dinner on the table fast</p>
                <Button />
            </div>
        </section>
    )
}
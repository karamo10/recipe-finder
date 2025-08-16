import Image from 'next/image';

export default function Expecting() {
  return (
    <section className="mb-4 py-8">
      <h1 className="text-4xl font-bold text-center mt-3">What you'll get</h1>
      <div className="w-3/4 mx-auto grid grid-cols-3 gap-6 mt-16 shadow-md pb-20">
        <div className="flex flex-col items-start gap-3">
          <Image
            src={'/images/hero-img.jpg'}
            alt={'Hero img'}
            className="object-cover rounded-md"
            width={80}
            height={100}
          />
          <h3 className="text-2xl font-bold">Whole-food recipes</h3>
          <p className="w-[80%] text-lg/relaxed">
            Each dish everyday, unprocessed ingredients.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Image
            src={'/images/hero-img.jpg'}
            alt={'Hero img'}
            className="object-cover rounded-md"
            width={80}
            height={100}
          />
          <h3 className="text-2xl font-bold">Minimum fuss</h3>
          <p className="w-[80%] text-lg/relaxed">
            All recipes are designed to make eating easy healthy quick and easy.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Image
            src={'/images/hero-img.jpg'}
            alt={'Hero img'}
            className="object-cover rounded-md"
            width={80}
            height={100}
          />
          <h3 className="text-2xl font-bold">Search in second</h3>
          <p className="w-[80%] text-lg/relaxed">
           Filter by name or ingredient and jump straight to the recipe you need.
          </p>
        </div>
      </div>
    </section>
  );
}

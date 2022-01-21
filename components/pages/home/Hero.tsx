import Image from 'next/image'
import heroSrc from 'public/images/hero.webp'

export const Hero = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow">
      <figure className='w-full h-[calc(100vh-8rem)] sm:h-[calc(100vh-12rem)] xl:h-[calc(100vh-20rem)]'>
        <Image src={heroSrc} alt='Imagen principal de Snap' layout='fill' objectPosition='center' objectFit='cover' />
      </figure>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-5 space-y-6'>
        <section className='text-center space-y-6'>
          <h1 className='text-white text-4xl md:text-6xl font-black'>Take control of your <br /> customer support</h1>
          <p className='text-gray-50 text-opacity-80 md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit recusandae omnis possimus quod. <br /> Perspiciatis quaerat? Saepe minus doloremque consequuntur!</p>
        </section>

        <div className='inline-flex items-center justify-center'>
          <button className='button button-horizontal button--secondary mr-2'>Get started</button>
          <button className='button button-horizontal button--primary button hover:text-primary ml-2'>Live demo</button>
        </div>
      </div>
    </div>
  )
}
import Image from 'next/image'
import mirageSrc from 'public/images/alliances/mirage.webp'
import statickitSrc from 'public/images/alliances/statickit.webp'
import transistorsSrc from 'public/images/alliances/transistors.webp'
import tupleSrc from 'public/images/alliances/tuple.webp'
import workcationSrc from 'public/images/alliances/workcation.webp'

export const Footer = () => {
  return (
    <footer className="my-8 space-y-4">
      <h3 className="uppercase text-center font-medium">TRUSTED BY OVER 5 VERY AVERAGE SMALL BUSINESSES</h3>
      <div className="w-full flex items-center justify-center xl:justify-between flex-wrap">
        <figure className='mx-2'>
          <Image src={mirageSrc} alt='Logo de la compañia Mirage' width={200} height={125} placeholder='blur' />
        </figure>
        <figure className='mx-2'>
          <Image src={statickitSrc} alt='Logo de la compañia StaticKit' width={200} height={125} placeholder='blur' />
        </figure>
        <figure className='mx-2'>
          <Image src={transistorsSrc} alt='Logo de la compañia Transistors' width={200} height={125} placeholder='blur' />
        </figure>
        <figure className='mx-2'>
          <Image src={tupleSrc} alt='Logo de la compañia Tuple' width={200} height={125} placeholder='blur' />
        </figure>
        <figure className='mx-2'>
          <Image src={workcationSrc} alt='Logo de la compañia Workcation' width={200} height={125} placeholder='blur' />
        </figure>
      </div>
    </footer>
  )
}
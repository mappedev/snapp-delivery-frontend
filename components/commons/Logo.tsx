import Image from 'next/image'
import logoSrc from 'public/images/logo.webp'

interface IProps {
  width: string
  height: string
}

export const Logo = ({ width, height }: IProps) => {
  return (
    <figure style={{ width: width, height: height }} className='rounded-full'>
      <Image src={logoSrc} alt='Logo de SnapExample' placeholder='blur' />
    </figure>
  )
}
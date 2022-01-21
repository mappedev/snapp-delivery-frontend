import { IClasses } from "lib/interfaces/IBasicProps"

export const Navbar = ({ classes = '' }: IClasses) => {
  return (
    <nav className={classes}>
      <ul className='inline-flex items-center justify-center'>
        <li className="mx-2">Solutions</li>
        <li className="mx-2">Pricing</li>
        <li className="mx-2">Partners</li>
        <li className="mx-2">Company</li>
      </ul>
    </nav>
  )
}
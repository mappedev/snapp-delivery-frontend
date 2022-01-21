import { IClasses } from "lib/interfaces/IBasicProps"

export const NavbarMobile = ({ classes = '' }: IClasses) => {
  return (
    <nav className={`mt-20 ${classes}`}>
      <ul className="divide-y">
        <li className="my-2 px-4 py-2">Solutions</li>
        <li className="my-2 px-4 py-2">Pricing</li>
        <li className="my-2 px-4 py-2">Partners</li>
        <li className="my-2 px-4 py-2">Company</li>
      </ul>
    </nav>
  )
}
import { Buttons } from "./Buttons"
import { IClasses } from "lib/interfaces/IBasicProps"
import { NavbarMobile } from "./NavbarMobile"

interface IProps extends IClasses {
  isOpen?: boolean
}

export const MenuMobile = ({ classes = '', isOpen = false }: IProps) => {
  return (
    <>
      <aside className={`lg:hidden absolute top-0 right-0 w-64 h-screen bg-white shadow-lg rounded-l-xl z-40 transition-transform transform translate-x-full divide-y ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${classes}`}>
        <NavbarMobile />
        <Buttons classes="flex pt-4" />
      </aside>
    </>
  )
}
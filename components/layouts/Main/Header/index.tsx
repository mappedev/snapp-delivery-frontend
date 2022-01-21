import Link from 'next/link'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'
import { Logo } from "components/commons/Logo"
import { Overlay } from 'components/commons/Overlay'
import { Navbar } from './Navbar'
import { Buttons } from "./Buttons"
import { useState } from 'react'
import { MenuMobile } from './MenuMobile'


export const Header = () => {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

  const handleClickBurgerButton = () => setMenuMobileIsOpen(!menuMobileIsOpen)

  return (
    <header className="w-full h-20 inline-flex items-center justify-between bg-white">
      <Link href='/'>
        <a>
          <Logo width="70px" height="70px" />
        </a>
      </Link>

      {/* Mobile */}
      <button className='z-50 lg:hidden' onClick={handleClickBurgerButton}>
        {menuMobileIsOpen ? <GiCancel /> : <GiHamburgerMenu />}
      </button>
      {menuMobileIsOpen && <Overlay onClick={handleClickBurgerButton} />}
      <MenuMobile isOpen={menuMobileIsOpen} />

      {/* Desktop */}
      <Navbar classes='hidden lg:block' />
      <Buttons classes='hidden lg:inline-flex' />
    </header>
  )
}
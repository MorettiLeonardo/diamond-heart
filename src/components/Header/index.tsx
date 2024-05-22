'use client'

import Image from 'next/image'

import Cart from '../icons/Cart'

import logo from '../../img/logo.png'

import { HeaderContainer, Navbar } from './styles'
import Link from 'next/link'

const Header = () => (
  <HeaderContainer>
    <Link href={'/'}>
      <Image src={logo} alt="Diamonds Heart" />
    </Link>
    <Navbar>
      <Link href={'/'}>Categorias</Link>
      <Link href={'/'}>Perfil</Link>
      <Link href={'/'}>
        <Cart />
      </Link>
    </Navbar>
  </HeaderContainer>
)

export default Header

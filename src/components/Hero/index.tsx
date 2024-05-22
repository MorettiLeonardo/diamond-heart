'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Container, Overlay } from './style'

import image1 from '../../img/header/home-img-1.jpg'
import image2 from '../../img/header/home-img-2.jpg'
import image3 from '../../img/header/home-img-3.jpg'
import image4 from '../../img/header/home-img-4.jpg'

const Hero = () => (
  <Container>
    <Link href={'/'}>
      <Image src={image1} alt="" />
      <Overlay />
      <span>Live Comfortably</span>
    </Link>
    <Link href={'/'}>
      <Image src={image2} alt="" />
      <Overlay />
      <span>Skincare</span>
    </Link>
    <Link href={'/'}>
      <Image src={image3} alt="" />
      <Overlay />
      <span>Kitchen</span>
    </Link>
    <Link href={'/'}>
      <Image src={image4} alt="" />
      <Overlay />
      <span>Eletronics</span>
    </Link>
  </Container>
)

export default Hero

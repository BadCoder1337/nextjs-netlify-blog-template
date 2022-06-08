import Burger from "./Burger"
import React, { useState } from "react"
import tw from "tailwind-styled-components"
import Brand from "./Brand"
import Menu from "./Menu"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Navbar = tw.nav<{ $transparent: boolean }>`
  ${p => (p.$transparent ? "bg-transparent" : "bg-gray-700 shadow-md")}
  fixed
  flex
  flex-wrap
  font-headline
  justify-between
  lg:flex-nowrap
  mt-0
  p-2 
  text-shadow-xl
  transition
  w-full
  z-50
`

export default function Navigation() {
  const [onTop, setOnTop] = useState(true)

  useScrollPosition(
    ({ currPos }) => {
      const isOnTop = currPos.y === 0
      if (isOnTop !== onTop) setOnTop(isOnTop)
    },
    [onTop]
  )

  const [active, setActive] = useState(false)
  return (
    <Navbar $transparent={onTop}>
      <Brand />
      <Burger active={active} onClick={() => setActive(!active)} />
      <Menu active={active} />
    </Navbar>
  )
}

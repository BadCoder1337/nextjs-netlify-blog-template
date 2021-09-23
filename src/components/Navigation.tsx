import Burger from "./Burger";
import React, { useState } from "react";
import tw from "tailwind-styled-components"
import Brand from "./Brand";
import Menu from './Menu';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Navbar = tw.nav<{ $top: boolean }>`
    font-headline
    ${p => p.$top ? "bg-transparent" : "bg-gray-900 shadow-md"}
    p-2 
    mt-0
    w-full
    fixed
    flex
    flex-wrap
    lg:flex-nowrap
    transition
    text-shadow-xl
    justify-between
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

  const [active, setActive] = useState(false);
  return (
    <Navbar $top={onTop}>
      <Brand />
      <Burger active={active} onClick={() => setActive(!active)} />
      <Menu active={active} />
    </Navbar>
  );
}

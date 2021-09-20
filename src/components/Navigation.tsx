
import { useRouter } from "next/router";
import Burger from "./Burger";
import React, { useState } from "react";
import tw from "tailwind-styled-components"
import Brand from "./Brand";

const Navbar = tw.nav`
    font-headline
    bg-gray-900
    p-2 
    mt-0
    w-full
    fixed
    flex
    
`
export const Menu = tw.div`
    container
    flex
    flex-wrap
    items-center
`
export const MenuLeft = tw.div`
    flex
    w-full
    md:w-1/2
    justify-center
    md:justify-start
    text-white
    font-extrabold
`
export const MenuRight = tw.div`
    flex
    w-full
    content-center
    justify-between
    md:w-1/2
    md:justify-end
`
export const MenuButtonList = tw.ul`
    list-reset
    flex
    justify-around
    flex-1
    md:flex-none
    items-center
`
export const MenuButton = tw.a`
    inline-block
    text-white
    no-underline
    hover:text-gray-200
    hover:text-underline
    py-2
    px-4
`


export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <Navbar>
      {/* <Burger active={active} onClick={() => setActive(!active)} /> */}
      <Brand />
      <Menu>
        <MenuLeft>
          <MenuButton target="_blank" href="https://discord.gg/r6ru">Где поиграть?</MenuButton>
        </MenuLeft>
        <MenuRight>
          <MenuButtonList>

            <MenuButton target="_blank" href="https://discord.gg/r6ru">Где поиграть?</MenuButton>
            <MenuButton target="_blank" href="https://rainbow6.ru">Rainbow6-RUSSIA</MenuButton>

          </MenuButtonList>
        </MenuRight>
      </Menu>
    </Navbar>
  );
}

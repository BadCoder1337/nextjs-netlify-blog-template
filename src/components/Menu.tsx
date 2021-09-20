import tw from "tailwind-styled-components"
import Link from "next/link";
import { NewspaperIcon, AtSymbolIcon, CurrencyDollarIcon, InformationCircleIcon } from '@heroicons/react/solid'

export const MenuContainer = tw.div`
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
`
export const MenuRight = tw.div`
    flex
    w-full
    content-center
    justify-between
    md:w-1/2
    md:justify-end
    font-bold
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
    inline-flex
    gap-1
    text-white
    no-underline
    hover:text-gray-200
    hover:text-underline
    py-2
    px-4
    whitespace-nowrap
    cursor-pointer
`

export default function Menu() {
    return <MenuContainer>
        <MenuLeft>
            <Link href="/"><MenuButton><NewspaperIcon width={24} height={24} />Новости</MenuButton></Link>
            <Link href="/"><MenuButton><CurrencyDollarIcon width={24} height={24} />Поддержать нас</MenuButton></Link>
            <Link href="/"><MenuButton><AtSymbolIcon width={24} height={24} />Связаться</MenuButton></Link>
            <Link href="/"><MenuButton><InformationCircleIcon width={24} height={24} />О нас</MenuButton></Link>
        </MenuLeft>
        <MenuRight>
            <MenuButton target="_blank" href="https://discord.gg/r6ru">Присоединиться</MenuButton>
        </MenuRight>
    </MenuContainer>
}
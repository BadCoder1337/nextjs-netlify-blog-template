import tw from "tailwind-styled-components"
import Link from "next/link";
import { NewspaperIcon, AtSymbolIcon, CurrencyDollarIcon, InformationCircleIcon } from '@heroicons/react/solid'
import DiscordIcon from "../../public/images/discord.svg";

const MenuContainer = tw.div<{ $active: boolean }>`
    ${p => p.$active ? "" : "hidden"}
    lg:flex
    w-full
    items-center

    bg-gray-800 shadow-md
    rounded-lg
    lg:bg-transparent
    lg:shadow-none
`
const MenuPart = tw.div`
    flex
    w-full
    flex-wrap
    lg:flex-nowrap
`
const MenuLeft = tw(MenuPart)`
    lg:justify-start
`
const MenuRight = tw(MenuPart)`
    lg:justify-end
    font-bold
`
const MenuButtonList = tw.ul`
    list-reset
    flex
    justify-around
    flex-1
    md:flex-none
    items-center
`
const MenuButton = tw.a`
    inline-flex
    gap-1
    text-white
    no-underline
    hover:text-gray-200
    hover:text-underline
    p-2
    whitespace-nowrap
    cursor-pointer
`

type Props = {
    active: boolean;
};
export default function Menu({ active }: Props) {
    return <MenuContainer $active={active}>
        <MenuLeft>
            <Link href="/posts"><MenuButton><NewspaperIcon width={24} height={24} />Блог</MenuButton></Link>
            <Link href="/donate"><MenuButton><CurrencyDollarIcon width={24} height={24} />Поддержать нас</MenuButton></Link>
            <Link href="/contact"><MenuButton><AtSymbolIcon width={24} height={24} />Связаться</MenuButton></Link>
            <Link href="/status"><MenuButton><InformationCircleIcon width={24} height={24} />Статус</MenuButton></Link>
        </MenuLeft>
        <MenuRight>
            <MenuButton target="_blank" href="https://discord.gg/r6ru"><DiscordIcon width={24} height={24} />Присоединиться</MenuButton>
        </MenuRight>
    </MenuContainer>
}
import { ChartBarIcon } from "@heroicons/react/solid"
import Link from "next/link"
import tw from "tailwind-styled-components"
import DiscordIcon from "../../public/images/discord.svg"

const MenuContainer = tw.div<{ $active: boolean }>`
    ${p => (p.$active ? "" : "hidden")}
    lg:flex
    w-full
    items-center

    bg-gray-700 shadow-md
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
  active: boolean
}
export default function Menu({ active }: Props) {
  return (
    <MenuContainer $active={active} className="text-xl">
      <MenuLeft>
        <Link href="/posts">
          <MenuButton
            target="_blank"
            href="https://tracker.rainbow6.ru"
            className="font-bold"
          >
            <ChartBarIcon width={30} height={30} />
            Трекер
          </MenuButton>
        </Link>
        {/* <Link href="/donate"><MenuButton><CurrencyDollarIcon width={24} height={24} />Поддержать нас</MenuButton></Link>
        <Link href="/contact"><MenuButton><AtSymbolIcon width={24} height={24} />Связаться</MenuButton></Link>
        <Link href="/status"><MenuButton><InformationCircleIcon width={24} height={24} />Статус</MenuButton></Link> */}
      </MenuLeft>
      <MenuRight>
        <MenuButton target="_blank" href="https://discord.gg/r6ru">
          <DiscordIcon width={30} height={30} />
          Присоединиться
        </MenuButton>
      </MenuRight>
    </MenuContainer>
  )
}

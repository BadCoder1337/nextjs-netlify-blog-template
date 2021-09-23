import tw from "tailwind-styled-components";
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const BurgerContainer = tw.div`
  lg:hidden
  flex
  items-center
  p-2
`

type Props = {
  active: boolean;
  onClick: () => void;
};
export default function Burger({ active, onClick }: Props) {
  return <BurgerContainer onClick={onClick}>
    {active
      ? <XIcon width={24} height={24} />
      : <MenuIcon width={24} height={24} />}
  </BurgerContainer>
}

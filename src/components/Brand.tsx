import Link from "next/link";
import tw from "tailwind-styled-components";
import Logo from "../../public/images/logo.svg";

const BrandContainer = tw.div`
    py-2
    px-4
    flex
`

const A = tw.a`
    text-white
    no-underline
    hover:text-white
    hover:no-underline
`

export default function Brand() {
    return <BrandContainer>
        <Link href="/">
            <A>
                {Logo}
                <span className="text-2xl pl-2 whitespace-nowrap">Rainbow6-RUSSIA</span>
            </A>
        </Link>
    </BrandContainer>
}
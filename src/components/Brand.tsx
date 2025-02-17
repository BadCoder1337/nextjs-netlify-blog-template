import Link from "next/link";
import tw from "tailwind-styled-components";
import logo from "../../public/images/logo.png";

const BrandContainer = tw.a`
    p-2
    text-white
    no-underline
    hover:text-white
    hover:no-underline
    flex
    font-extrabold
    flex-shrink-0
    cursor-pointer
`

export default function Brand() {
    return <Link href="/">
        <BrandContainer>
            <img className="inline" src={logo.src} width={48} height={48} />
            <span className="text-2xl pl-2 py-2 whitespace-nowrap">Rainbow6-RUSSIA</span>
        </BrandContainer>
    </Link>

}
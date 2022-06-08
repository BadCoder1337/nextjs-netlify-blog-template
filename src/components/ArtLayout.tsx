import React from "react"
import tw from "tailwind-styled-components"
import Layout from "./Layout"

const ArtContainer = tw.div`
  bg-operators-art
  flex
  items-center
  justify-center
  pt-12
  lg:pt-5
`

type Props = {
  children: React.ReactNode
  header: string
  subheader?: string
}
export default function ArtLayout({ children, header, subheader }: Props) {
  return (
    <Layout>
      <ArtContainer className={subheader ? "h-72 md:h-80" : "h-56 md:h-64"}>
        <div className="backdrop-blur-md p-3 rounded-xl max-w-xl">
          <h1 className="text-3xl md:text-4xl">{header}</h1>
          <h2 className="text-lg md:text-xl">{subheader}</h2>
        </div>
      </ArtContainer>
      {children}
    </Layout>
  )
}

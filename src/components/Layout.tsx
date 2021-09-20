import Head from "next/head";
import tw from "tailwind-styled-components";
import Navigation from "./Navigation";

const LayoutContainer = tw.div`
  min-h-screen
  h-full
  text-white
  bg-operators-art
  bg-cover
  bg-center
  leading-normal
  tracking-normal
  font-main
  flex
  flex-col
`

const Main = tw.main`
  flex
  min-h-full
`

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <LayoutContainer>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Navigation />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

import Head from "next/head";
import tw from "tailwind-styled-components";
import Navigation from "./Navigation";

const LayoutContainer = tw.div`
  min-h-screen
  text-white
  bg-black
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
  flex-col
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#111827" />
      </Head>
      <Navigation />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

import Head from "next/head";
import React from "react";
import tw from "tailwind-styled-components";
import Layout from "./Layout";
import Navigation from "./Navigation";

const ArtContainer = tw.div`
  bg-operators-art
  flex
  items-center
  justify-center
  pt-10
  lg:pt-0
`

type Props = {
  children: React.ReactNode;
  header: string;
  subheader?: string
};
export default function ArtLayout({ children, header, subheader }: Props) {
  return (
    <Layout>
      <ArtContainer style={{ height: subheader ? "24rem" : "16rem" }}>
        <div className="backdrop-filter backdrop-blur-md p-3 rounded-xl">
          <h1 className="text-5xl">{header}</h1>
          <h2 className="text-2xl">{subheader}</h2>
        </div>
      </ArtContainer>
      {children}
    </Layout>
  );
}

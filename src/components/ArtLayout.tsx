import Head from "next/head";
import React from "react";
import tw from "tailwind-styled-components";
import Layout from "./Layout";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function ArtLayout({ children }: Props) {
  return (
    <Layout>
      {/* <Art /> */}
      {children}
    </Layout>
  );
}

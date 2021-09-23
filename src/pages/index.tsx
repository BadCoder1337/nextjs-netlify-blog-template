import React from "react";
import tw from "tailwind-styled-components";
import ArtLayout from "../components/ArtLayout";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";



export default function Index() {
  return (
    <ArtLayout header="Rainbow6-RUSSIA" subheader="Не просто Discord, а самое большое и уютное сообщество по Rainbow Six Siege">
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h2 className="text-2xl">🚧 Скоро тут будет интересно. 🚧</h2>
          {/* <SocialList /> */}
        </div>
      </div>
      <style jsx>{`
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1 auto;
            padding: 0 1.5rem;
            height: 80vh;
          }
        `}</style>
    </ArtLayout>
  );
}

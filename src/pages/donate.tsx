import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Donate() {
  return (
    <Layout>
      <BasicMeta url={"/donate"} />
      <OpenGraphMeta url={"/donate"} />
      <TwitterCardMeta url={"/donate"} />
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
            height: 100vh;
          }
        `}</style>
    </Layout>
  );
}

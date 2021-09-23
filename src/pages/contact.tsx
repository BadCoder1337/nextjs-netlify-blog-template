import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Contact() {
  return (
    <Layout>
      <BasicMeta url={"/contact"} />
      <OpenGraphMeta url={"/contact"} />
      <TwitterCardMeta url={"/contact"} />
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

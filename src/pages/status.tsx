import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Status() {
  return (
    <Layout>
      <BasicMeta url={"/status"} />
      <OpenGraphMeta url={"/status"} />
      <TwitterCardMeta url={"/status"} />
      <div className="container text-shadow-xl">
        <div>
          <h1>
            Привет, мы Rainbow6-RUSSIA.
          </h1>
          <a href="https://vk.com/rainbow6_ru" className="handle">@rainbow6_ru</a>
          <h2>Скоро все будет по-новому.</h2>
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
            height: 120vh;
          }
          h1 {
            font-size: 2.5rem;
            margin: 0;
            font-weight: 500;
          }
          h2 {
            font-size: 1.75rem;
            font-weight: 400;
            line-height: 1.25;
          }
          .fancy {
            color: #15847d;
          }
          .handle {
            display: inline-block;
            margin-top: 0.275em;
            color: #9b9b9b;
            letter-spacing: 0.05em;
          }
  
          @media (min-width: 769px) {
            h1 {
              font-size: 3rem;
            }
            h2 {
              font-size: 2.25rem;
            }
          }
        `}</style>
    </Layout>
  );
}

import tw from "tailwind-styled-components";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

const ArtContainer = tw.div`
  bg-operators-art
  flex
  items-center
  justify-center
  pt-10
  lg:pt-0
`

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <ArtContainer>
        <div className="backdrop-filter backdrop-blur-md p-3 rounded-xl">
          <h1 className="text-5xl">Rainbow6-RUSSIA</h1>
          <h2 className="text-2xl">Не просто Discord, а самое большое и уютное сообщество по Rainbow Six Siege</h2>
        </div>
      </ArtContainer>
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
    </Layout>
  );
}

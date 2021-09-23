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
          <h1>
            Привет, мы Rainbow6-RUSSIA.
          </h1>
          <a href="https://vk.com/rainbow6_ru" className="handle">@rainbow6_ru</a>
          <h2>Скоро все будет по-новому.</h2>
          {/* <SocialList /> */}
        </div>
      </div>
    </Layout>
  );
}

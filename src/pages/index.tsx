import React from "react"
import ArtLayout from "../components/ArtLayout"
import BasicMeta from "../components/meta/BasicMeta"
import OpenGraphMeta from "../components/meta/OpenGraphMeta"
import TwitterCardMeta from "../components/meta/TwitterCardMeta"
import tw from "tailwind-styled-components"

const P = tw.p`
  indent-5
  p-0.5
`

const B = tw.b`font-bold`
const I = tw.b`italic`

export default function Index() {
  return (
    <ArtLayout
      header="Rainbow6-RUSSIA"
      subheader={`Не просто Discord, а самое большое и уютное сообщество по Rainbow\xa0Six\xa0Siege, Extraction и Mobile`}
    >
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="flex items-center justify-center max-w-xl sm:max-w-3xl p-5">
        <div className="">
          <h2 className="text-2xl">Кто мы?</h2>
          <P>
            Сообщество игроков <B>Rainbow6-RUSSIA</B> появилось на самой
            недружелюбной площадке в Steam в 2015 году.{" "}
          </P>
          <P>
            С тех пор мы прошли длинный путь и сейчас по праву считаемся самым
            крупным и технологичным игровым сообществом по играм серии{" "}
            <B>Rainbow&nbsp;Six.</B>
          </P>
          <P>
            У нас всегда можно найти себе команду для игры. Благодаря нашим
            ботам мы можем дать лучший опыт игры и защитить наших участников от
            недобросовестных игроков.
          </P>
          <P>
            Мы так же регулярно проводим ивенты по <B>Jackbox</B>,{" "}
            <B>Своей Игре</B> и другим пати-играм, разыгрываем игровой контент,
            публикуем новости <B>Осады</B>, флексим с{" "}
            <a
              className="text-blue-500"
              href="https://www.youtube.com/shorts/AKo9HmmOxa8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Лысым&nbsp;из&nbsp;Brazzers
            </a>{" "}
            и{" "}
            <a
              className="text-blue-500"
              href="https://www.youtube.com/shorts/rBOS5vuZVs0"
              target="_blank"
              rel="noopener noreferrer"
            >
              ♂️&nbsp;Боссом качалки&nbsp;♂️
            </a>{" "}
            и не только.
          </P>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/r6ru"
            className="text-lg block text-black bg-white w-fit rounded-md py-1.5 px-3 mt-2"
          >
            Присоединяйся!
          </a>
        </div>
      </div>
    </ArtLayout>
  )
}

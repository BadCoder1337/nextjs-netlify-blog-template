import { formatISO } from "date-fns";

const dateFormatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: "long" });

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span>{dateFormatter.format(date)}</span>
      <style jsx>{`
          span {
            /* color: #9b9b9b; */
          }
      `}</style>
    </time>
  );
}

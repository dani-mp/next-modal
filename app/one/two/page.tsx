import Link from "next/link";
import Modal from "./Modal";

export default function Page({
  searchParams: { modal },
}: {
  searchParams: { modal?: string };
}) {
  console.log(modal);
  return (
    <>
      <h1>Hola, two</h1>
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}>
            <Link href={`/one/two?modal=${i}`}>{i}</Link>
          </li>
        ))}
      </ul>
      <Modal value={modal}></Modal>
    </>
  );
}

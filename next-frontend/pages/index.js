import Head from "next/head";
import Link from "next/link";
import { url } from "../config/next.config";

export default function Home({ list }) {
  console.log(list);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Welcome home!</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link href={`/article/${item.id}`}>
              <a>{item.attributes.Title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${url}/api/articles`);
  const list = await data.json();

  console.log('list: ', list.data)

  return {
    props: { list: list.data },
    revalidate: 1,
  };
};
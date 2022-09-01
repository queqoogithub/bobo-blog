import Head from "next/head";
import Link from "next/link";
import { url, apiToken } from "../config/next.config";
import Layout from "../components/Layout";
import Articles from "../components/Articles";

export default function Home({ list }) {
  console.log(list);

  return (
    <Layout title="Hone Page">
      <Head>
        <title>Home</title>
      </Head>
      <h1>Welcome home!</h1>
      {/* <ul>
        {list.map((item) => (
          <li key={item.id} className='mb-3'>
            <Link href={`/article/${item.id}`}>
              <a>
                <div className="text-[20px]">{item.attributes.Title}</div>
                <img src={ url + item.attributes.Cover.data.attributes.url } />
              </a>
            </Link>
          </li>
        ))}
      </ul> */}
      <Articles list={list}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${url}/api/articles?populate=*`, { // Strapi v4: Relations population > GET /api/books?populate=*
    headers: {
      Authorization:
      `Bearer ${apiToken}`,
    },
  });
  const list = await data.json();

  console.log('list: ', list.data)

  return {
    props: { list: list.data },
    revalidate: 1,
  };
};
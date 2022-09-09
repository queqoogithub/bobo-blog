import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { url, apiToken } from "../config/next.config";
import Layout from "../components/Layout";
import Articles from "../components/Articles";
import Pagination from "../components/Pagination";

export default function Home({ list }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  //console.log(list);

  // Get current list
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentList = list.slice(indexOfFirstPost, indexOfLastPost);
  console.log('currentList = ', currentList)
  
  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <Layout title="Home Page">
      <Head>
        <title>Home</title>
      </Head>
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
      <div className="grid grid-cols-1 gap-4 place-items-center ">
      {/* <div className="grid place-items-center h-screen"> */}
        <Articles list={currentList}/>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={list.length}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
          currentPage={currentPage}
        />
      </div>
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
    props: { list: list.data.reverse() }, // desc id list (article)
    revalidate: 1,
  };
};
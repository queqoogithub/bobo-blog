import { url, apiToken } from "../../config/next.config";
import ReactMarkdown from "react-markdown";
import Layout from '../../components/Layout';
import BuyMeCoffee from "../../components/BuyMeCoffee";

export default function Article({ article }) {
  // Todo => Give me a cup of coffee ☕️ 
  return (
    <Layout title="Article Page">
      <div className="grid grid-cols-1 gap-4 place-items-center ">
        <h1 className="text-white text-[20px] font-bold text-center">{article.attributes.Title}</h1>
        {/* <div><ReactMarkdown>{article.attributes.Body}</ReactMarkdown></div> */}
        <h3 className="text-white text-[25px]">🙄 🙄 🙄</h3>
        <div className="text-white place-self-start mt-5 md:place-self-center md:mb-5 "><p className="text-[12px]">Publish at: {(article.attributes.publishedAt).slice(0, 10)}</p></div>
        <div>
          <div className="grid place-items-center text-justify text-[13px] md:text-[16px] gap-y-4 text-white"
            dangerouslySetInnerHTML={{__html: article.attributes.Body}}
          />
        </div>
        <BuyMeCoffee />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${url}/api/articles`, {
    headers: {
      Authorization:
      `Bearer ${apiToken}`,
    },
  });
  const articles = await res.json();

  console.log('articles : ', articles)
  // Get the paths we want to pre-render based on posts
  const paths = articles.data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const data = await fetch(`${url}/api/articles/${context.params.id}`, {
    headers: {
      Authorization:
      `Bearer ${apiToken}`,
    },
  });
  const article = await data.json();

  return {
    props: { article: article.data },
    revalidate: 1,
  };
};


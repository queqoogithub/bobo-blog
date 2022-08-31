import { url } from "../../config/next.config";
import ReactMarkdown from "react-markdown";


export default function Article({ article }) {
  return (
    <div className="grid place-items-center h-screen p-4">
      <h1 className="text-3xl font-bold underline">{article.attributes.Title}</h1>
      {/* <div><ReactMarkdown>{article.attributes.Body}</ReactMarkdown></div> */}
      <h3>---------</h3>
      <div>
        <div className="grid place-items-center h-screen text-justify"
          dangerouslySetInnerHTML={{__html: article.attributes.Body}}
        />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetch(`${url}/api/articles/${context.params.id}`);
  const article = await data.json();

  return {
    props: { article: article.data },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${url}/api/articles`);
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
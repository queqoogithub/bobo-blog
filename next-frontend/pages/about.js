import { url } from "../config/next.config";
import Layout from "../components/Layout";

export default function About({ data }) {
  console.log(data);

  return (

    <Layout title="About Page">
      <div className="grid grid-cols-1 gap-4 place-items-center p-4 text-white">
        <h1 className="text-2xl font-bold">About Me</h1>
        <p className="text-[96px]">👨‍🚀</p>
        <div className="text-[13px] md:text-[16px] text-justify mb-8">{data.attributes.Body}</div>
        {/* <div 
            dangerouslySetInnerHTML={{__html: data.attributes.Body}}
        /> */}
        <img className="rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/270/375/653/abstract-mountain-airplane-pink-wallpaper-preview.jpg" alt="about_image" />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${url}/api/about`);
  const data = await res.json();
  
  return {
    props: { data: data.data },
    revalidate: 1,
  };
};
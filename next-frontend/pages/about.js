import { url } from "../config/next.config";
export default function About({ data }) {
  console.log(data);

  return (

    <div className="grid place-items-center h-screen p-4 text-justify text-[12px]">
      <h1 className="text-2xl">About Me</h1>
      <p className="text-[94px]">🦸‍♂️</p>
      <div>{data.attributes.Body}</div>
      {/* <div 
          dangerouslySetInnerHTML={{__html: data.attributes.Body}}
      /> */}
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    </div>
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
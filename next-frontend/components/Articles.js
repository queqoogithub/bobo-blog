import React from "react";
import Link from "next/link";
import { url } from "../config/next.config";

const Articles = ({ list, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((item) => (
          <li key={item.id} className='p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mb-2 w-80'>
            <Link href={`/article/${item.id}`}>
              <a>
                <div className="mb-2 text-[16px] text-center">{item.attributes.Title}</div>
                <div className="mb-2 text-[14px] "> ⭐️ {item.attributes.Tag}</div>
                <img className="object-fill h-38 w-72" src={ url + item.attributes.Cover.data.attributes.url } />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
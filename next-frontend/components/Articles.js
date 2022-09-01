import React from "react";
import Link from "next/link";
import { url, apiToken } from "../config/next.config";

const Articles = ({ list, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
};

export default Articles;
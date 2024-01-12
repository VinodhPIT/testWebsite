import React from "react";
import path from "path";
import fs from "fs";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";

export default function ListingDetail({ data, queryId }) {
  let filterData = data.filter((e) => e.id === parseInt(queryId));

  return (
    <div>
      {filterData.map((el) => {
        return (
          <div key={el.id}>
            <Image
              src={el.imageUrl}
              alt={el.title}
              placeholder="blur"
              loading="lazy"
              blurDataURL={blurDataURL}
              width={376}
              height={240}
            />

            <h4>{el.title}</h4>

            <p>{el.desc}</p>
            <p>{el.tagTitle}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const filePath = path.join(process.cwd(), "src", "data", "blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  const listing = data[context.locale];

  return {
    props: {
      data: listing,
      queryId: context.query.detail,
    },
  };
}

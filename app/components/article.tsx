"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../app/lib/sanity";

type Article = {
  _id: string;
  title: string;
  image: string;
  category: string;
  slug: string;
};

export default function ContentArea() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "post"] | order(_createdAt desc)[0...4]{
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "category": categories[0].title
    }`;
      const data = await client.fetch(query);
      console.log("p", data); // Verifique se os dados são recuperados corretamente
      setArticles(data);
    }

    fetchData();
  }, []);

  return (
    <section id="blog" className="bg-[#C3A039] p-6 sm:p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl font-bold">
          Saiba mais sobre seus direitos
        </h2>
        <Link
          href="/artigos"
          className="text-white text-sm hover:underline flex items-center"
        >
          Ver Mais →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={`/artigos/${article.slug}`}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 text-xs rounded-md z-10">
              {article.category || "Artigos"}
            </div>
            <Image
              src={article.image || "/fallback.jpg"}
              alt={article.title}
              width={400}
              height={224}
              className="w-full h-56 object-cover group-hover:brightness-75 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold mt-2">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

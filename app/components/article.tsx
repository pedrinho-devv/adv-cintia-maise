'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const articles = [
  {
    title: "Aposentadoria Urbana e Rural",
    image: "/card1.webp",
  },
  {
    title: "Aposentadoria por Contribuição",
    image: "/card1.webp",
  },
  {
    title: "Aposentadoria por Invalidez",
    image: "/card1.webp",
  },
];

const ContentArea = () => {
  return (
    <section className="bg-[#C3A039] p-6 sm:p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl font-bold">Saiba mais sobre seus direitos</h2>
        <Link href="#" className="text-white text-sm hover:underline flex items-center">
          Ver Mais →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group"
          >
            <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 text-xs rounded-md z-10">
              Artigos
            </div>
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={224}
              className="w-full h-56 object-cover group-hover:brightness-75 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold mt-2">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentArea;

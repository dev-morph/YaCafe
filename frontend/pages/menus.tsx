import React from 'react';
import Link from 'next/link';

const menus = () => {
  const categories = [
    { title: '근처 카페', value: 'around' },
    { title: '열공 모드', value: 'study' },
    { title: '분위기 깡패', value: 'mood' },
    { title: '브런치 맛집', value: 'brunch' },
    { title: 'With Cute Pet', value: 'pet' },
    { title: '힐링 힐링', value: 'healing' },
    { title: '이색 카페', value: 'extraordinary' },
    { title: '기타', value: 'etc' },
  ];

  return (
    <>
      <ul className="mx-2.5 grid grid-cols-2 gap-2 h-full">
        {categories.map((c, index) => (
          <Link
            key={index}
            href={{ pathname: '/map', query: { sth: c.value } }}
          >
            <li className="shadow-lg bg-orange-200 height flex justify-center items-center cursor-pointer rounded-md">
              <span>{c.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default menus;

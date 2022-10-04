import React from 'react';

const menus = () => {
  const categories = [
    '근처 카페',
    '열공 모드',
    '분위기 깡패',
    '브런치 맛집',
    'With Cute Pet',
    '힐링 힐링',
    '이색 카페',
    '기타',
  ];
  return (
    <>
      <ul className="mx-2.5 grid grid-cols-2 gap-2 h-full">
        {categories.map((c) => (
          <li className="shadow-lg bg-orange-200 height flex justify-center items-center cursor-pointer">
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default menus;

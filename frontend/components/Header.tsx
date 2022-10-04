import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div className="h-16  ">
      <Link href="/menus">
        <span>Ya-Cafe !!</span>
      </Link>
    </div>
  );
}

export default Header;

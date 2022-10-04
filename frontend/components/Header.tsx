import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div className="h-16 flex justify-between items-center px-2.5">
      <Link href="/menus">
        <span>Ya-Cafe !!</span>
      </Link>
    </div>
  );
}

export default Header;

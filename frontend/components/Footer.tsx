import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className="h-16 w-full absolute bottom-0 z-50 flex justify-between items-center px-2.5">
      <span>Footer</span>
      <Link href="/login">
        <div>MenuBtn</div>
      </Link>
    </div>
  );
}

export default Footer;

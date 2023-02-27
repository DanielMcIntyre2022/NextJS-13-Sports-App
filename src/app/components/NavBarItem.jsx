'use client'

import Link from "next/link";
import { useSearchParams } from 'next/navigation';

function NavBarItem({title, param}) {

const searchParams = useSearchParams();

  return (
    <div>
      <Link 
      className="m-4 p-2"
      href={`/?league=${param}`}>
            {title}
      </Link>
    </div>
  )
}

export default NavBarItem;
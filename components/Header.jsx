import React, {useContext} from 'react';

import Link from 'next/link';

const catagories = [
    {name: 'Blog', slug: 'blog'},
    {name: 'Penetration Testing', slug: 'pentest'},
];

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        Dave Blog
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {catagories.map((catagory) =>  (
                    <Link key={catagory.slug} href={`/catagory/${catagory.slug}`} >
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {catagory.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header
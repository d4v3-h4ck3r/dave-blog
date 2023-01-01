import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCatagories } from '../services';

const Catagories = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    getCatagories()
      .then((newCatagories) => setCatagories(newCatagories))
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Catagories
      </h3>
      { catagories.map((catagory) => (
        <Link href={`/catagory/${catagory.slug}`} key={catagory.slug}>
          <span className='cursor-pointer block pb-3 mb-3 hover:text-pink-600'>
            {catagory.name}
          </span>
        </Link>
      )) }
    </div>
  )
}

export default Catagories;
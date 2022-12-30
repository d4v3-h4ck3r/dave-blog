import Head from 'next/head';
import { PostCard, PostWidget, Catagories } from '../components';

const posts = [
  { title: 'Blog Building', excerpt: 'Dave Blog in production' },
  { title: 'Blog Styling', excerpt: 'Dave Blog in style with tailwindcss' },
];

export default function Home () {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Dave Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title}/>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Catagories />
          </div>
        </div>
      </div>
    </div>
  )
}

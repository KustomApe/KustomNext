import Image from 'next/image';
import Head from 'next/head';
import Post from '../components/post/post';
import { getAllPostsData } from '../lib/posts';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Kustom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mb-10 p-3 border rounded'>
        <Image className='object-cover rounded'
        src='/top.jpg'
        alt='top'
        width={1920}
        height={1278}
        />
      </div>
      <div className='flex justify-center flex-col items-center mb-10'>
        <div className='text-lg mb-3'>
          BLOG POSTS
        </div>
        <div className='border w-14'></div>
      </div>
      <div className='flex flex-wrap -m-4 mb-5'>
        {
          posts && posts.map((post) => <Post key={post.id} post={post} />)
        }
      </div>
      {/* <h1 className="text-9xl flex justify-center h-screen items-center text-indigo-500">Kustom</h1> */}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
    revalidate: 3,
  };
}

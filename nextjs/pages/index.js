import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kustom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-9xl flex justify-center h-screen items-center text-indigo-500">Kustom</h1>
    </div>
  );
}

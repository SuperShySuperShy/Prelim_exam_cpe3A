import Link from 'next/link';
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {
  return (
    <Layout>
        <head>
            <title>First post</title>
            </head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
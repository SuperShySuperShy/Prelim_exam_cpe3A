import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>What is your impression on your first month as an 3rd Year Computer Engineering Student?</p>
        <p>My impression on my first month as an 3rd Year Computer Engineering Student is that I will learn many more things unlike last year.
          I'm excitedly looking forward to this year because We are rewarded with Professors and Instructors who are passionate in their jobs and in teaching.
          I also think that I will learn many things in Software Development and other electronics subjects. I am also looking forward to the new officers of 
          the organization of Computer Engineering and on what they would do to keep the program lively and more welcoming unlike before.
        </p>
        <p>I know now how to update my website.</p>
        <p>We are trying to build a sample website using: <a href = "https://nextjs.org/learn"> our Next.js tutorial</a></p>
        <p></p>
      </section>
    </Layout>
  );
}
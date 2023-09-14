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
        <p>10 things That require zero talent.</p>
        <p></p>
        <p>
        •1. Being On Time<br/>
        •2. Making An Effort<br/>
        •3. Being High Energy<br/>
        •4. Having A Positive Attitude<br/>
        •5. Being Passionate<br/>
        •6. Using Good Body Language<br/>
        •7. Being Coachable<br/>
        •8. Doing A Little Extra<br/>
        •9. Being Prepared<br/>
        •10. Having A Strong Work Ethic<br/>
        </p>
        <p></p>
        <p>(This is a sample website - you’ll be building a site like this on <a href = "https://nextjs.org/learn"> our Next.js tutorial</a>)</p>
        <p></p>
      </section>
    </Layout>
  );
}
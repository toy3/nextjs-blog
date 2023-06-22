import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

/** Static Generation 의 경우 **/
export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

/** Server-side Rendering 의 경우 : context 에 요청 파라미터를 넣어줘야 함 **/
// export const getServerSideProps: GetServerSideProps = async (context) => {
//     return {
//         props: {
//             // props for your component
//         },
//     };
// }

export default function Home({ allPostsData }: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[ Hi! ]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
          <p className={styles.title}>
            {/*Read <Link href="/posts/first-post">this page!!!</Link>*/}
          </p>
        </section>

        {/** 외부데이터 fetch **/}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                  </small>
              </li>
          ))}
          </ul>
        </section>
      </Layout>
  );
}
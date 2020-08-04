import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "./components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello my name is Jafar</p>
        <p>
          I am a web developer, frontend especially now im still learning NextJS for my next Project
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a> {title} </a>
              </Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

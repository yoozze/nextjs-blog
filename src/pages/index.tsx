import { GetStaticProps } from 'next';
import Head from 'next/head';

import { BlogPostListData, getBlogPosts } from '../lib/content';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import Link from '../components/link';

import utilStyles from '../styles/utils.module.scss';

interface HomeProps {
    blogPosts: BlogPostListData[];
}

function Home({ blogPosts }: HomeProps): JSX.Element {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {blogPosts.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link to={`/blog/${id}`}>{title}</Link>
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

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getBlogPosts();
    return {
        props: {
            blogPosts,
        },
    };
};

export default Home;

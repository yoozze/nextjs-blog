import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { BlogPostData, getBlogPost, getBlogPostIds } from '../../lib/content';
import Date from '../../components/date';
import Layout from '../../components/layout';

import utilStyles from '../../styles/utils.module.scss';

interface BlogPostParams {
    postData: BlogPostData;
}

function BlogPost({ postData }: BlogPostParams): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <p className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </p>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getBlogPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getBlogPost(params.id as string);
    return {
        props: {
            postData,
        },
    };
};

export default BlogPost;

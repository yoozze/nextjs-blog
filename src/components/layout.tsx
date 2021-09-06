import React from 'react';
import Head from 'next/head';

import Link from './link';
import Image from './image';

import styles from '../styles/layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

export interface LayoutProps {
    children: React.ReactNode;
    home?: boolean;
}

const name = 'My Name';
export const siteTitle = 'Next.js Sample Website';

function Layout({ children, home }: LayoutProps): JSX.Element {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            className={utilStyles.borderCircle}
                            src="/images/profile.jpg"
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link to="/">
                            <Image
                                className={utilStyles.borderCircle}
                                src="/images/profile.jpg"
                                height={108}
                                width={108}
                                alt={name}
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link className={utilStyles.colorInherit} to="/">
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link to="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;

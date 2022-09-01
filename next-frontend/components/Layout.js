import Head from 'next/head';
import Link from 'next/link';
import { Menu } from '@headlessui/react';

export default function Layout({ title, children }) {
    return(
        <>
            <Head>
                <title>{title ? title + ' - Bobo' : 'Bobo'}</title>
                <meta name="description" content="Tech Blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between ">
                <main className="container m-auto mt-4 px-4">{children}</main>
                <footer className="flex h-10 justify-center items-center shadow-inner">
                    <p>Copyright © 2022 Bobo Tech</p>
                </footer>
            </div>
        </>
    )
}

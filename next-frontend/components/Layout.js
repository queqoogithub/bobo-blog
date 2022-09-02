import Head from 'next/head';
import { useRouter } from 'next/router'

export default function Layout({ title, children }) {
    const router = useRouter()

    return(
        <>
            <Head>
                <title>{title ? title + ' - Bobo' : 'Bobo'}</title>
                <meta name="description" content="Tech Blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="flex h-10 justify-center items-center mt-8 mb-3">
                    <button className="my-3 mx-1 bg-[#db2777] text-white hover:text-white  py-2 px-3 rounded-md " 
                            onClick={() => router.push(`/`)}
                    >HOME
                    </button>
                    <button className="my-3 mx-1 bg-[#db2777] text-white hover:text-white  py-2 px-2 rounded-md "
                            onClick={() => router.push(`/about`)}
                    >ABOUT
                    </button>
                </div>
                <main className="container m-auto mt-4 px-4 mb-3 ">{children}</main>
                <footer className="flex h-10 justify-center items-center shadow-inner mt-5 bg-[#fef08a]">
                    <p>Copyright © 2022 Bobo-Tech</p>
                </footer>
            </div>
        </>
    )
}

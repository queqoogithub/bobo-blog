import Link from "next/link";
import Layout from "../components/Layout";

function cancel() {
    return (
        <Layout>
            <div className="grid grid-cols-1 gap-4 place-items-center text-white">
                <p className="text-[66px]">😭</p>
                <p className="text-[18px]">Looks like you canceled the order.</p>
                <Link href="/">
                    <p className="text-[22px] underline underline-offset-8">GO TO HOME PAGE</p>
                </Link>
            </div>
        </Layout>
    );
}

export default cancel;
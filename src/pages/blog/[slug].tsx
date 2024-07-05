import Layout from "@/components/layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Post } from "@/types/blog";
const DetailPage = () => {
    const [post, setPost] = useState<Post>();
    const [blogId, setBlogId] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        // クエリパラメータを取得
        // router.query.ファイル名
        const slug = router.query.slug;
        console.log(slug);
        if (typeof slug === "string") {
            setBlogId();
        }

    }, [router.query])


    useEffect(() => {
        if (blogId === '') { return; }
        setPost({
            slug: '0001',
            title: '',
            eyecatch: './Image/'
        }
    })

    return (
        <Layout>
            <h1>詳細ページ</h1>
        </Layout>
    );
};

export default DetailPage;
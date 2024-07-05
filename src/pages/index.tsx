import { Inter } from "next/font/google";
import Logo from "../components/logo";
import Nav from "@/components/nav";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Posts from "@/components/posts";
import { Post } from "@/types/blog";
import Pagenation from "@/components/pagenation";
import Footer from "@/components/footer";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });
const data:Post[] = [
  {slug: "001", title:"記事のタイトル",eyecatch:"/images/eyecatch.jpg"},
  {slug: "002", title:"記事のタイトル",eyecatch:"/images/eyecatch.jpg"},
  {slug: "003", title:"記事のタイトル",eyecatch:"/images/eyecatch.jpg"},
  {slug: "004", title:"記事のタイトル",eyecatch:"/images/eyecatch.jpg"},

];

export default function Home() {
  return(
   <Layout>
      <Hero title="CUBE" subtitle="アプトプットしていくサイト" isImage/>
      <Posts posts={data}/>
      <Pagenation nextText="次の記事へ" nextUrl="/blog"/>
   </Layout>
  ) ;
}

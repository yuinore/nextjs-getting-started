// /news/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import GenerateStaticParamsExplanation from "@/components/generateStaticParamsExplanation";
import commonStyles from "@/app/common.module.css";
import { getNewsData } from "@/lib/news";

export const metadata: Metadata = {
  title: "ニュース一覧 - Next.js Getting Started",
  description: "最新の技術ニュースや開発情報をお届けします。",
  twitter: {
    card: "summary",
    site: "https://nextjs-getting-started-clone.vercel.app",
    creator: "@yuinore",
    title: "ニュース一覧 - Next.js Getting Started",
    description: "最新の技術ニュースや開発情報をお届けします。",
  },
};

export default async function NewsPage() {
  const newsItems = await getNewsData();

  return (
    <div>
      <h1>ニュース一覧</h1>
      <p>
        このページでは、リポジトリ内のJSONファイルから
        <code>generateStaticParams</code>
        を使ってビルド時に静的なHTMLを生成し、SSG（Static Site Generation）を行っています。
      </p>

      <div>
        <h2>技術ニュース</h2>
        <div>
          {newsItems.toReversed().map((item) => (
            <article key={item.id}>
              <h3>
                <Link href={`/news/${item.id}`}>{item.title}</Link>
              </h3>
              <p>{item.content}</p>
              <div className={commonStyles["muted-slightly-smaller"]}>
                <span>投稿日: {item.publishedAt}</span>
                <span> | </span>
                <span>著者: {item.author}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <GenerateStaticParamsExplanation />

      <div>
        <Link href="/">← トップページに戻る</Link>
      </div>
    </div>
  );
}

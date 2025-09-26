// /news/[id]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GenerateStaticParamsExplanation from "@/components/generateStaticParamsExplanation";
import { getNewsData, getNewsById } from "@/lib/news";

// generateStaticParams: ビルド時に静的なパラメータを生成
export async function generateStaticParams() {
  const newsItems = await getNewsData();

  return newsItems
    .filter((item) => Number(item.id) > 0)
    .map((item) => ({
      id: item.id,
    }));
}

// generateMetadata: 動的メタデータ生成
interface MetadataProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { id } = await params;
  const newsItem = await getNewsById(id);

  // 記事が見つからない場合は404ページを表示
  if (!newsItem || Number(id) <= 0) {
    notFound();
  }

  return {
    title: `${newsItem.title} - Next.js Getting Started`,
    description: newsItem.content,
    twitter: {
      card: "summary",
      site: "https://nextjs-getting-started-clone.vercel.app",
      creator: "@yuinore",
      title: `${newsItem.title} - Next.js Getting Started`,
      description: newsItem.content,
    },
  };
}

// ページコンポーネント
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const newsItem = await getNewsById(id);

  // 記事が見つからない場合は404ページを表示
  if (!newsItem || Number(id) <= 0) {
    notFound();
  }

  return (
    <div>
      <article>
        <header>
          <h1>{newsItem.title}</h1>
          <div>
            <span>投稿日: {newsItem.publishedAt}</span>
            <span> | </span>
            <span>著者: {newsItem.author}</span>
            <span> | </span>
            <span>記事ID: {newsItem.id}</span>
          </div>
        </header>

        <div>
          <p>{newsItem.content}</p>
        </div>
      </article>

      <GenerateStaticParamsExplanation />

      <nav>
        <Link href="/news">← ニュース一覧に戻る</Link>
        <span> | </span>
        <Link href="/">← トップページに戻る</Link>
      </nav>
    </div>
  );
}

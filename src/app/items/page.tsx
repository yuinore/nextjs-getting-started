// /items/page.tsx

// show list of items and random items

import type { Metadata } from "next";
import Link from "next/link";
import { generateItemName } from "@/lib/generateItemName";
import RandomItems from "@/components/randomItems";

export async function generateMetadata(): Promise<Metadata> {
  const title = `販売中の商品一覧`;
  const description = `現在販売中の商品を見ることができます。`;

  return {
    title: title,
    description: description,
    twitter: {
      card: "summary",
      site: "https://nextjs-getting-started-clone.vercel.app",
      creator: "@yuinore",
      title: title,
      description: description,
    },
  };
}

export default async function ItemPage() {
  const topSellingItemIds = [1, 16, 145];

  return (
    <div>
      <h2>売れ筋商品</h2>
      <ul>
        {topSellingItemIds.map((id) => (
          <li key={id}>
            <Link href={`/items/${id}`}>{generateItemName(id)}</Link>
          </li>
        ))}
      </ul>
      <RandomItems />
      <h2>トップページ</h2>
      <ul>
        <li>
          <Link href="/">トップページに戻る</Link>
        </li>
      </ul>
    </div>
  );
}

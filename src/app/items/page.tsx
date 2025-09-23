// /items/[id]/page.tsx

// show title and description for the item

import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { generateItemName } from "@/lib/generateItemName";

interface MetadataProps {}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `販売中の商品一覧`,
    description: `現在販売中の商品を見ることができます。`,
  };
}

interface PageProps {}

export default async function ItemPage({}: PageProps) {
  const topSellingItemIds = [1, 16, 145];
  let randomPickItemIds = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 10000),
    Math.floor(Math.random() * 100000),
    Math.floor(Math.random() * 1000000),
  ];

  // make unique and sort
  randomPickItemIds = [...new Set(randomPickItemIds)].toSorted((a, b) => a - b);

  return (
    <div>
      <h2>売れ筋商品</h2>
      <ul>
        {topSellingItemIds.map((id) => (
          <li key={id}><Link href={`/items/${id}`}>{generateItemName(id)}</Link></li>
        ))}
      </ul>
      <h2>ランダム商品</h2>
      <ul>
        {randomPickItemIds.map((id) => (
          <li key={id}><Link href={`/items/${id}`}>{generateItemName(id)}</Link></li>
        ))}
      </ul>
      <Link href="/items">別の商品を表示する</Link>
    </div>
  );
}

// /items/[id]/page.tsx

// show title and description for the item

import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { generateItemName } from "@/lib/generateItemName";

interface MetadataProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(
  { params }: MetadataProps,
): Promise<Metadata> {
  const { id } = await params;

  const isSecretDescription =
    Number(id) === 116;

  const description = isSecretDescription
    ? `あなたも「酸っぱいぶどう風 超美味しいメロン」を購入してみませんか？`
    : `${generateItemName(Number(id))} の通販ページです。`;

  return {
    title: `商品番号 ${id} ${generateItemName(Number(id))} の通販ページ`,
    description: description,
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ItemPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <div>
      <h2>{generateItemName(Number(id))} の通販ページ</h2>
      <div>商品番号: {id}</div>
      <div>商品名: {generateItemName(Number(id))}</div>
      <div>お買い物のヒント：商品番号 65535 の商品を 10 個購入すると……！？</div>
      <ul>
        <li>
          <Link href={`/items/${Number(id) + 1}`}>次の商品</Link>
        </li>
        <li>
          <Link href={`/items/${Number(id) - 1}`}>前の商品</Link>
        </li>
        <li>
          <Link href="/items">商品一覧</Link>
        </li>
        <li>
          <Link href="/">トップページに戻る</Link>
        </li>
      </ul>
    </div>
  );
}

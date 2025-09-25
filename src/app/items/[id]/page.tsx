// /items/[id]/page.tsx

// show title and description for the item

import type { Metadata } from "next";
import Link from "next/link";
import { generateItemName } from "@/lib/generateItemName";
import commonStyles from "@/app/common.module.css";

interface MetadataProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { id } = await params;

  const isSecretDescription = Number(id) === 116;

  const title = `商品番号 ${id} ${generateItemName(Number(id))} の通販ページ`;
  const description = isSecretDescription
    ? `あなたも「酸っぱいぶどう風 超美味しいメロン」を購入してみませんか？`
    : `${generateItemName(Number(id))} の通販ページです。`;

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

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ItemPage({ params }: PageProps) {
  const { id } = await params;

  // Loading状態を確認するための人工的な遅延（開発時のみ）
  // await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <div>
      <h2>{generateItemName(Number(id))} の通販ページ</h2>
      <div>商品番号: {id}</div>
      <div>商品名: {generateItemName(Number(id))}</div>
      <div>お買い物のヒント：商品番号 65535 の商品を 10 個購入すると……！？</div>
      <ul>
        <li>
          Dynamic Routes:
          <ul style={{ marginBottom: "0.75rem" }}>
            <li>
              <Link href={`/items/${Number(id) - 1}`} prefetch={true}>
                前の商品
              </Link>
              <span className={commonStyles.hint}>
                (prefetch=true のため、高速に遷移できます)
              </span>
            </li>
            <li>
              <Link href={`/items/${Number(id) + 1}`} prefetch={true}>
                次の商品
              </Link>
              <span className={commonStyles.hint}>
                (prefetch=true のため、高速に遷移できます)
              </span>
            </li>
            <li>
              <Link href={`/items/${Number(id) + 10}`} prefetch={false}>
                10 個後の商品
              </Link>
              <span className={commonStyles.hint}>
                (prefetch=false のため、高速に遷移できません)
              </span>
            </li>
          </ul>
        </li>
        <li>
          Static Routes:
          <span className={commonStyles.hint}>
            (既定でプリフェッチされます)
          </span>
          <ul>
            <li>
              <Link href="/items">商品一覧</Link>
            </li>
            <li>
              <Link href="/">トップページに戻る</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  // dynamically generated header and meta tags
  const slug = "random-slug-" + Math.random();

  return {
    title: slug,
    description: slug,
  };
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
          これは Next.js の学習のために作成されたサイトです。
        </div>
        <ol>
          <li><Link href="/items">青果の通販ページ</Link>を開く</li>
          <li>売れ筋商品を見る</li>
          <li>お買い物のヒントを見る</li>
          <li>成果を X でみんなに知らせる</li>
          <li>Next.js について、もっと深く学んでみる</li>
        </ol>
      </main>
    </div>
  );
}

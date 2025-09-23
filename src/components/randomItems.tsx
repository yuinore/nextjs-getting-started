"use client";

import Link from "next/link";
import { generateItemName } from "@/lib/generateItemName";
import { useEffect, useState } from "react";

export default function RandomItems() {
  const [randomPickItemIds, setRandomPickItemIds] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  // 注意：
  //   use client を指定しても、サーバーサイドでレンダリングがされなくなるわけではない。

  const generateRandomItems = () => {
    let itemIds = [
      Math.floor(Math.random() * 5),
      Math.floor(Math.random() * 5 + 5),
      Math.floor(Math.random() * 40 + 10),
      Math.floor(Math.random() * 50 + 50),
      Math.floor(Math.random() * 400 + 100),
      Math.floor(Math.random() * 500 + 500),
      Math.floor(Math.random() * 9000 + 1000),
      Math.floor(Math.random() * 90000 + 10000),
      Math.floor(Math.random() * 900000 + 100000),
    ];

    // make unique and sort
    itemIds = [...new Set(itemIds)].toSorted((a, b) => a - b);
    setRandomPickItemIds(itemIds);
  };

  useEffect(() => {
    setIsClient(true);
    generateRandomItems();
  }, []);

  if (!isClient) {
    return (
      <div>
        <h2>ランダム商品</h2>
        <p>読み込み中...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>ランダム商品</h2>
      <ul>
        {randomPickItemIds.map((id) => (
          <li key={id}>
            <Link href={`/items/${id}`}>{generateItemName(id)}</Link>
          </li>
        ))}
      </ul>
      <button onClick={generateRandomItems}>別の商品を表示する</button>
    </div>
  );
}

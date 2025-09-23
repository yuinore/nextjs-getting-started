"use client";

import Link from "next/link";
import { generateItemName } from "@/lib/generateItemName";

export default function RandomItems() {
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
      <h2>ランダム商品</h2>
      <ul>
        {randomPickItemIds.map((id) => (
          <li key={id}>
            <Link href={`/items/${id}`}>{generateItemName(id)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

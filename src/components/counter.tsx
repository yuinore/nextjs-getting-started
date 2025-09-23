"use client";

import { useState } from "react";
import styles from "./counter.module.css";
import { generateItemName } from "@/lib/generateItemName";

type CurrentCount = Record<string, number>;

export default function Counter() {
  const [count, setCount] = useState<CurrentCount>({});

  const [secretRevealed, setSecretRevealed] = useState(false);
  const [secret2Revealed, setSecret2Revealed] = useState(false);
  const [secret3Revealed, setSecret3Revealed] = useState(false);

  if (!secretRevealed && count["65535"] >= 10) {
    setSecretRevealed(true);
  }

  if (!secret2Revealed && count["116"] >= 1) {
    setSecret2Revealed(true);
  }

  if (!secret3Revealed && count["16144"] >= 1) {
    setSecret3Revealed(true);
  }

  return (
    <div className={styles["counter-container"]}>
      <button
        onClick={() => {
          let currentCountId = location.pathname.split("/").pop() ?? "-1";
          if (parseInt(currentCountId).toString() !== currentCountId) {
            currentCountId = "-1";
          }
          setCount({
            ...count,
            [currentCountId]: (count[currentCountId] ?? 0) + 1,
          });
        }}
        style={{
          marginRight: "0.3rem",
        }}
      >
        1個購入する
      </button>
      <button
        onClick={() => {
          setCount({});
        }}
        disabled={Object.keys(count).length === 0}
      >
        カートの中身を空にする
      </button>
      {Object.entries(count).map(([id, count]) => (
        <div key={id}>
          {generateItemName(Number(id))} : {count} 個
        </div>
      ))}
      {secretRevealed && (
        <div>
          <span style={{ color: "red" }}>シークレットが解禁されました！</span> 次は<b>「超すっぱいぶどう」</b>を購入してみましょう！ (進捗 1/3)
        </div>
        )}
        {secret2Revealed && (
            <div>
            <span style={{ color: "red" }}>おめでとうございます！</span> この商品ページをシェアして、みんなに知らせてあげましょう！ Twitter カードに何か新しいヒントがあるかも……？ (進捗 2/3)
            </div>
        )}
      {secret3Revealed && (
        <div>
          <span style={{ color: "red" }}>おめでとうございます！ 全ての進捗をクリアしました！</span> Next.js について、もっと深く学んでみましょう！ (進捗 3/3)
        </div>
      )}
    </div>
  );
}

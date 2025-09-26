import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <div className={styles["not-found-dummy-image"]}>ナイヨー</div>
      <p>あなたが探していたページは消えてなくなってしまいました。</p>
      <Link href="/">ホームに戻る</Link>
    </div>
  );
}

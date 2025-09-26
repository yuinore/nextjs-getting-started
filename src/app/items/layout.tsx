import commonStyles from "@/app/common.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>青果の通販ページ</h1>
      <div>
        これは items ディレクトリのレイアウト (src/app/items/layout.tsx) です。
      </div>
      <div>これはすべての items 以下のページに適用されます。</div>
      <div className={commonStyles["content-wrapper"]}>
        <div className={commonStyles["title"]}>props.children</div>
        {children}
      </div>
    </div>
  );
}

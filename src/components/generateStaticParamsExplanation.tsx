// generateStaticParamsの動作説明を行う共通コンポーネント

export default function GenerateStaticParamsExplanation() {
  return (
    <div>
      <h3>generateStaticParams について</h3>
      <p>
        この実装では、<code>generateStaticParams</code>を使用して、
        ビルド時にJSONファイルからニュースデータを読み込み、
        各ニュース記事のページを静的に生成しています（SSG）。
      </p>
      <ul>
        <li>
          <strong>ビルド時:</strong> <code>generateStaticParams</code>
          でJSONファイルからニュース記事のIDリストを取得
        </li>
        <li>
          <strong>ビルド時:</strong> 各IDに対してページコンポーネントを実行し、静的HTMLを事前生成
        </li>
        <li>
          <strong>リクエスト時:</strong> 事前生成された静的HTMLを高速配信
        </li>
        <li>SSG かどうかは、ビルドログの「● (SSG)」マークを確認することで判別可能です</li>
      </ul>
    </div>
  );
}

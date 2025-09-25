import { promises as fs } from "fs";
import path from "path";

export interface NewsItem {
  id: string;
  publishedAt: string;
  title: string;
  content: string;
  author: string;
}

/**
 * JSONファイルからニュースデータを取得する関数
 * @returns ニュース記事の配列
 */
export async function getNewsData(): Promise<NewsItem[]> {
  const filePath = path.join(process.cwd(), "src/data/news.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData);
}

/**
 * 特定のIDのニュース記事を取得する関数
 * @param id ニュース記事のID
 * @returns 該当するニュース記事、存在しない場合はnull
 */
export async function getNewsById(id: string): Promise<NewsItem | null> {
  const newsItems = await getNewsData();
  return newsItems.find((item) => item.id === id) || null;
}

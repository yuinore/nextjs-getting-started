const itemStuffNames = [
  "みかん",
  "りんご",
  "いちご",
  "バナナ",
  "メロン",
  "スイカ",
  "ぶどう",
  "もも",
  "さくらんぼ",
  "パイナップル",
];

const itemAdjectives = [
  "甘い",
  "酸っぱい",
  "苦い",
  "辛い",
  "美味しい",
  "特価",
  "高性能",
  "高級",
  "希少",
  "カラフル",
];

const itemAdverbs = [
  "令和最新版",
  "超",
  "極",
  "特",
  "最",
  "爆",
  "大",
  "新",
  "限定版",
  "良",
];

export function generateItemName(id: number) {
  if (id < 0 || Number.isNaN(id)) {
    return "虚無";
  }
  const idStr = id.toString();

  const result = idStr.split("").map((char, index) => {
    const indexFromEnd = idStr.length - index - 1;
    const type = indexFromEnd % 3;
    const val = parseInt(char);
    if (type === 0) {
      if (indexFromEnd === 0) {
        return itemStuffNames[val];
      } else {
        return itemStuffNames[val] + "風 ";
      }
    } else if (type === 1) {
      return itemAdjectives[val];
    } else {
      return itemAdverbs[val];
    }
  });

  return result.join("");
}

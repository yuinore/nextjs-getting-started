"use client";

export default function Footer() {
  const githubRepositoryRootUrl =
    "https://github.com/yuinore/nextjs-getting-started";
  return (
    <div style={{ fontSize: "0.85rem", marginTop: "0.75rem" }}>
      See <a href={githubRepositoryRootUrl}>GitHub</a> (ネタバレ注意)
    </div>
  );
}

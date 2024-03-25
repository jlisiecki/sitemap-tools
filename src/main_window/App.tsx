import "@/index.css";
import get from "@/lib/get";
import parseSitemap from "@/lib/parseSitemap";
import { useEffect, useState } from "react";

export default function App() {
  const [sitemapDoc, setSitemapDoc] = useState<Document | null>(null);

  useEffect(() => {
    (async () => {
      const content = await get("https://kwiatowadostawa.pl/sitemap.xml");
      const doc = parseSitemap(content);
      setSitemapDoc(doc);
    })().catch((err) => {
      console.error(err);
    });
  });

  return (
    <div>
      <pre>{sitemapDoc?.documentElement.outerHTML}</pre>
    </div>
  );
}

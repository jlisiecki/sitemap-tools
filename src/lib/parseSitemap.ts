export default function parseSitemap(content: string) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(content, "text/xml");
  return xmlDoc;
}

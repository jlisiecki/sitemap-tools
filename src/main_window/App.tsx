import "@/index.css";
import fs from "fs";
import path from "path";

export default function App() {
  return (
    <div>
      <pre>
        {fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8")}
      </pre>
    </div>
  );
}

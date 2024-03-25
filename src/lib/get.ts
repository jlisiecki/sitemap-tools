import axios from "axios";
import "./itrim";

export default async function get(url: string) {
  const response = await axios.get<string>(url, {});

  if (response.status !== 200) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  if (
    response.headers["Content-Type"]
      ?.toString()
      .toLocaleLowerCase()
      .itrim()
      .startsWith("application/xml")
  ) {
    throw new Error("Invalid content type");
  }

  return response.data;
}

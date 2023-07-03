import { json } from "@sveltejs/kit";
import { getAllData } from "../../../Components/dummy-data";
export async function GET({ url }) {
  const error = url.searchParams.get("error");

  if (error?.length > 0) {
    return new json({ message: "error fetching data" }, { status: 500 });
  } else {
    return new json(getAllData(), { status: 200 });
  }
}

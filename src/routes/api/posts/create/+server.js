import { json } from "@sveltejs/kit";
import { addNewData } from "../../../../Components/dummy-data.js";

export async function POST({ url, request }) {
  const { colorName, colorValue } = await request.json();
  if(colorName.trim().length===0 || colorValue.trim().length===0)
  {
    return new json({ message: "cannot leave feilds empty" }, { status: 400 });
  }
  const neww = addNewData(colorName, colorValue);

  return new json({ message: "successfully added data" }, { status: 201 });
}

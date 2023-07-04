import { json } from "@sveltejs/kit";
import { addNewData } from "../../../../Components/dummy-data.js";
import { prisma } from "../../../../libs/server/prisma.js";

export async function POST({ url, request }) {
  const { colorName, colorValue } = await request.json();
  if(colorName.trim().length===0 || colorValue.trim().length===0)
  {
    return new json({ message: "cannot leave feilds empty" }, { status: 400 });
  }
  
  try {
    const newData = await prisma.arrData.create({
      data : {
        color : colorName ,
        value : colorValue
      }
     });
  } catch (error) {
    return new json({ message: error }, { status: 500 });
  }
   

  return new json({ message: "successfully added data" }, { status: 201 });
}

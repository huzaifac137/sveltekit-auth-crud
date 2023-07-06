import { json } from "@sveltejs/kit";
import { addNewData } from "../../../../Components/dummy-data.js";
import { prisma } from "../../../../libs/server/prisma.js";
export const prerender = false;

export async function POST({ url, request }) {

  const { colorName, colorValue , creatorId } = await request.json();
  if(colorName.trim().length===0 || colorValue.trim().length===0)
  {
    return new json({ message: "cannot leave feilds empty" }, { status: 400 });
  }
  
  try {
    const newData = await prisma.arrData.create({
      data : {
        color : colorName ,
        value : colorValue ,
        creatorId : creatorId
      }
     });
  } catch (error) {
    return new json({ message: error.message }, { status: 500 });
  }
   

  return new json({ message: "successfully added data" }, { status: 201 });
}

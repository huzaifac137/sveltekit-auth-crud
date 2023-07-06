import { json } from "@sveltejs/kit";
import { prisma } from "../../../libs/server/prisma.js";
import { dataStore, getStore } from "../../../Store/userStore.js";
export const prerender = false;

export async function GET({ url }) {
  const data = getStore(dataStore);
  
  
  const error = url.searchParams.get("error");

  if (error?.length > 0) {
    return new json({ message: "error fetching data" }, { status: 500 });
  } else {

    let allData;
    try {
          allData = await prisma.arrData.findMany({});
    } catch (error) {
      return new json({ message: error.message }, { status: 500 });
    }
   
    return new json(allData, { status: 200 });
  }
}

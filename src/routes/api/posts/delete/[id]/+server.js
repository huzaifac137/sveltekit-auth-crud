import { json } from '@sveltejs/kit';
import { getDataByValueAndDelete } from '../../../../../Components/dummy-data.js';
import { prisma } from '../../../../../libs/server/prisma.js';

export async function DELETE({url})
{
   const value = url.pathname.split("/delete/")[1];
   
   
   try {
       await  prisma.arrData.delete({
           where : {
               id : Number(value)
           } 
         });
   } catch (error) {
      return new json({ message: error.message }, { status: 400 });
   }


   return new json({message :"Successfully deleted!"} , {status:201})
}
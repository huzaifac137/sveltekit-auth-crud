import { json } from '@sveltejs/kit';
import { getDataByValueAndDelete } from '../../../../../Components/dummy-data.js';
import { prisma } from '../../../../../libs/server/prisma.js';

export async function DELETE({url})
{
   const data = url.pathname.split("/delete/")[1];
   const postId = data.split("kanapumabollin")[0];
   const creatorId = data.split("kanapumabollin")[1];

   
   
   try {
  const userExists =  await prisma.user.findFirst({ where : {
        id : creatorId
    }});

    if(!userExists)
    { 
        return new json({ message: "youre not authorized to do this action" }, { status: 401 });
    }

       await  prisma.arrData.delete({ 
        where : {
            id : postId
        } , include :{
            creator : true
        }
         });
   } catch (error) {
      return new json({ message: error.message }, { status: 400 });
   }


   return new json({message :"Successfully deleted!"} , {status:201})
}
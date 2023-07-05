export const actions = {

    default: async ({  request , fetch }) => {
        const data = await request.formData();
        const color= data.get('color');
        const value= data.get('value');

        let responseData , responseMsg;
    try {
      responseMsg = "";
      const response = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          colorName: color,
          colorValue: value,
        }),
      });

      responseData = await response.json();

      if (response.status !== 201) {
        throw new Error(responseData.message);
      }

      responseMsg = responseData.message;
      return {
          responseMsg : responseMsg
      }
      
    } catch (error) {
      responseMsg = error.message;
       
      return {
        responseMsg : responseMsg
      }
    }
       
    },
   
};
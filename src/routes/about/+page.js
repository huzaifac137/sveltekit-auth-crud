export const load = async ({ fetch, url }) => {
  let responseData;
  try {
    const error = url.searchParams.get("error");

    const response = await fetch(
      `/api/posts?error=${error !== "" && error != null ? error : ""}`,
    );
    responseData = await response.json();

    if (response.status !== 200) {
      throw new Error(responseData.message);
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }

  return {
    data: responseData,
  };
};

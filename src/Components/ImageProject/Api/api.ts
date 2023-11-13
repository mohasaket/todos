import axios from "axios";

const searchImages = async (term: string) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID z19t9WnTj2q6tCROPFnP8qW9RPUIAljF8a-bmDMKQz0",
    },
    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;

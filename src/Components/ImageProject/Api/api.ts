import axios from "axios";

const searchImages = async (term: string) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID BxIS1ZazfdbVZKdQ0VDFdUb5XWDaIy22x9HNuVgcUFU",
    },
    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;

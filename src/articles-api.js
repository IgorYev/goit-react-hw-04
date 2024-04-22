import axios from "axios";

const apiKey = "toSRq2P8w1nCIohNTIlPQPsJF9-zj_at2rFDl31PQgc";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 5,
      orientation: "landscape",
      client_id: apiKey,
    },
  });
  console.log(response);
  return response.data.results;
};

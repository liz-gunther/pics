import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID xutmYeor_xMcyr2nQhgS2g9KvArDJ2jphZv3H4ACS10'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;
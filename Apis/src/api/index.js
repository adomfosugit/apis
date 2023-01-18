import axios from 'axios'
 export const getVideos = async (query) => {
    const BASE_URL = 'https://youtube138.p.rapidapi.com/search/'
        const options = {
          method: 'GET',
          url: BASE_URL,
          params: {q: query, hl: 'en', gl: 'US'},
          headers: {
            'X-RapidAPI-Key': '486eb9790emsh8e2e69ee6a7af94p1fb8e4jsn468ff4e50912',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
          }
        };
        const response = await axios.get(`${BASE_URL}`, options)
        const data = response.data.contents
       // const data = raw.contents
      
        return(data)
      }
      
  
import axios from 'axios'
 export const getVideos = async (query) => {
    const BASE_URL = 'https://youtube138.p.rapidapi.com/search/'
        const options = {
          method: 'GET',
          url: BASE_URL,
          params: {q: query, hl: 'en', gl: 'US'},
          headers: {
            'X-RapidAPI-Key': '562d622a65msha01a4d66be58973p1031d8jsn89ad26f05128',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
          }
        };
        const response = await axios.get(`${BASE_URL}`, options)
        const data = response.data.contents
       // const data = raw.contents
      
        return(data)
      }
      
  
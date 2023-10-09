import axios from 'axios'

const searchImage = async (search) => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers:{
            Authorization:"Client-ID kJ2qd0zeu8Ke7_v17KO6kwVxC4t2TrRxIHcSdhL-1aw"
        },
        params:{
            query:search
        }
    })

    return response.data.results
}

export default searchImage
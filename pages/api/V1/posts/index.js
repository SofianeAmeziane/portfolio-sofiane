
import axios from 'axios'

export default async (req,res) => {
    try {
    const axiosres = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = axiosres.data;
    res.status(200).json(posts.slice(0, 10));
    } catch (error) {
        console.log(error)
        res.status(400).json({message : 'Api error'})
    }
}

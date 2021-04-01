
import axios from 'axios'

export default async (req,res) => {
    try {
    const axiosres = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);
    const post = axiosres.data;
    res.status(200).json(post);
    } catch (error) {
        console.log(error)
        res.status(400).json({message : 'Api error'})
    }
}

import {useEffect} from 'react'
import {useRouter} from 'next-routes'


const Redirect = ({to}) => {

    const router = useRouter();

    useEffect(() => {

        router.push(to);
    }, [])
}
export default Redirect;
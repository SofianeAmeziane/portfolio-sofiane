
import auth0 from '@/utils/auth0';
export default async(req,res) => {

    try {
        await auth0.handleLogin(req,res);
    } catch (error) {
        console.log(error)
    }
}
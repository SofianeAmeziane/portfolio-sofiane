
import auth0 from '@/utils/auth0';
export default async(req,res) => {

    try {
        await auth0.handleCallback(req,res,{redirectTo:'/'});
    } catch (error) {
        console.log(error)
    }

}
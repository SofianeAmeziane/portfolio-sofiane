import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import {useGetUser} from '@/actions/user'

const About = () => {
  const {data,error, loading} = useGetUser();
  debugger
    return(
      <div>
        <Baselayout user={data} loading={loading}>
        <Basepage>
      i am about page
      </Basepage>
      </Baselayout>
      </div>
    )
  }
  export default About
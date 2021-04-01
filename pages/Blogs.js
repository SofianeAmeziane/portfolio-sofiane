import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import {useGetUser} from '@/actions/user'

const Blogs = () => {
  const {data,loading} = useGetUser();
    return(
      <div>
      <Baselayout user={data} loading={loading}>
      <Basepage>
      i am Blogs page
      </Basepage>
      </Baselayout>
      </div>
    )
  }
  export default Blogs
import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import {useGetUser} from '@/actions/user'

const Cv = () => {
  const {data,loading} = useGetUser();
    return(
      <div>
      <Baselayout user={data} loading={loading}>
      <Basepage>
      i am Cv page
      </Basepage>
      </Baselayout>
      </div>
    )
  }
  export default Cv
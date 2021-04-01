import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import {useGetUser} from '@/actions/user'
import {useRouter} from 'next/router'

const Secret = () => {
  const {data,loading} = useGetUser();
  const route = useRouter();
   if (loading) {
       return <p>...loading</p>
   }
  if (!data) {
      route.push('/api/V1/login')
      return null
  } else {
  <Baselayout user={data} loading={loading}>
  <Basepage>
  i am secret page
  </Basepage>
  </Baselayout>
  }
  }
  export default Secret
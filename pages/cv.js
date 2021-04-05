import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import withAuth from '@/hoc/withAuth';

const Cv = ({user,loading}) => {
    return(
      <div>
      <Baselayout user={user} loading={loading}>
      <Basepage>
      i am Cv page-{user.name}
      </Basepage>
      </Baselayout>
      </div>
    )
  }
  export default withAuth(Cv)()
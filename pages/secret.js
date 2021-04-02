import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import Redirect from '@/components/shared/Redirect';
import withAuth from '@/hoc/withAuth';

const Secret = ({title}) => {
  const { data, loading } = useGetUser();

  if (loading) {
    return <p>Loading...</p>
  }

  if (!data) {
    // Todo: Improve return
    return <Redirect to="/api/V1/login"/>
    //router.push('/api/v1/login');
  } else {
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>I am Secret Page - {title}</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(Secret);
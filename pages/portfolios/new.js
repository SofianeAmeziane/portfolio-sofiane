import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import PortfolioForm from '@/components/PortfolioForm'
import {useGetUser} from '@/actions/user'
import { createPortfolioAction } from '@/actions/portfolios';
import {Row, Col} from 'reactstrap'

const PortfolioNew = () => {
  const {data,loading} = useGetUser();
  const _CreatePortfolio = (dataport) => {
    createPortfolioAction(dataport);
}
    return(
      <div>
        <Baselayout user={data} loading={loading}>
        <Basepage header="Create Portfolio">
            <Row>
                <Col md="6">
                   <PortfolioForm onSubmit={_CreatePortfolio}/>
                </Col>
            </Row>
      </Basepage>
      </Baselayout>
      </div>
    )
  }
  export default PortfolioNew
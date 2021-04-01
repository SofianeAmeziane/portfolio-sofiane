import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import PortfolioCard from '@/components/PortfolioCard'
import { Row, Col, Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';
import {useRouter} from 'next/router'
import {useGetUser} from '@/actions/user'
import Portfolioapi from '@/lib/api/portfolios'

const Portfolio = ({portfolios}) => {
  const router = useRouter();
 const {data :dataU,loading:loadingU} = useGetUser();
 debugger
    return(
      <div>
      <Baselayout user={dataU} loading={loadingU}>
      <Basepage className="portfolio-page" header="portfolios">
        <Row>
        { portfolios.map(portfolio =>
          <Col 
          key={portfolio._id} 
          md="4"
          onClick={()=>{
            router.push('/portfolios/[id]',`/portfolios/${portfolio._id}`)
          }}>
            <PortfolioCard portfolio={portfolio} />
          </Col>
          )
        }
      </Row>
      </Basepage>
      </Baselayout>
      </div>
    )
  }

  export async function getStaticProps() {
    const json = await new Portfolioapi().getAll();
    const portfolios = json.data;
    return {
      props : {portfolios}
    }
    
  }
  export default Portfolio
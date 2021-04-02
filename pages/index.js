import Baselayout from '@/components/layouts/baselayout'
import {useGetUser} from '@/actions/user'
import Basepage from '@/components/Basepage'
import {Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
const Index = () => {
  const Roles = ['Developer','Tech Lover','Team Player','Coursor Create','React','Angular']
  const { data, loading } = useGetUser();
  return(
    <div>
<Baselayout navClass="transparent" className="cover" user={data} loading={loading}>
  <div className="main-section">
    <div className="background-image">
      <img src="/images/background-index.png" />
    </div>

    <Container>
      <Row>
        <Col md="6">
          <div className="hero-section">
            <div className={`flipper`}>
              <div className="back">
                <div className="hero-section-content">
                  <h2> Full Stack Web Developer </h2>
                  <div className="hero-section-content-intro">
                    Have a look at my portfolio and job history.
                  </div>
                </div>
                <img className="image" src="/images/section-1.jpg"/>
                <div className="shadow-custom">
                  <div className="shadow-inner"> </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" className="hero-welcome-wrapper">
          <div className="hero-welcome-text">
            <h1>
              Welcome to the portfolio website of Sofiane Ameziane.
              Get informed, collaborate and discover projects I was working on through the years!
            </h1>
          </div>
          <Typed
                    loop
                    strings={Roles}
                    typeSpeed={70}
                    backSpeed={70}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    className="self-typed"
                    cursorChar="|"
                />
          <div className="hero-welcome-bio">
            <h1>
              Let's take a look on my work.
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</Baselayout>

    </div>
  )
}
export default Index
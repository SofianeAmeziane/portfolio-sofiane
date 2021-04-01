import Baselayout from '@/components/layouts/baselayout'
import Basepage from '@/components/Basepage'
import {useGetUser} from '@/actions/user'
import React from 'react'
import Portfolioapi from '@/lib/api/portfolios'
const Portfolio = ({portfolio}) => {
   
    const {data :dataU,loading:loadingU} = useGetUser();
    debugger
        return(
            <div>
                <Baselayout user={dataU} loading={loadingU}>
                <Basepage header="portfolio detail">
                    {
                   JSON.stringify(portfolio)
                    }
                </Basepage>
                </Baselayout>
            </div>
        )
}

    export async function getStaticPaths() {
        const json = await new Portfolioapi().getAll();
        const portfolios = json.data;

        const paths = portfolios.map(portfolio =>{
            return {
                params: {id:portfolio._id}
            }

        })
        return {paths,fallback:false};
    }
    export async function getStaticProps({params}) {
       const json = await new Portfolioapi().getById(params.id)
       const portfolio = json.data;
       return {props:{portfolio}};
        
    }
export default Portfolio;
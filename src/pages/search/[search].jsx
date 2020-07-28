import Layout from '../../components/Layout'
import Head from 'next/head'
import axios from 'axios'
import Cards from '../../components/cards/Cards'

const search = ({sneakers,query}) => {
    return (
        <Layout>
            <Head>

            </Head>
            <h3>Showing Results for: {query}</h3>
            {sneakers && <Cards sneakers={sneakers} />}
            <style jsx>{`
                h3{
                    margin:80px 0px 0px 20px;
                    color:#444;
                }
            `}</style>
        </Layout>
    )
}

search.getInitialProps = async (ctx) =>{
    const { query } = ctx
    const url = `https://api.thesneakerdatabase.com/v1/sneakers?limit=20&name=${query.search}`
    const res = await axios.get(url)
    return {
        sneakers: res.data,
        query: query.search
    }
}

export default search

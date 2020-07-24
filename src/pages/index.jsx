import axios from 'axios'
import Cards from '../components/cards/Cards'
import Layout from "../components/Layout"
import Head from 'next/head'

const index = ({sneakers}) => {
    return (
        <Layout>
            <Head>
                <title>Sneaks | Find Sneakers</title>
                <meta name="description" content="This Project was Made by Stanley Garbo where users can look for sneakers. Using the sneakers API by tg4solutions."/>
            </Head>
            {sneakers && <Cards sneakers={sneakers} />}
        </Layout>
    )
}

index.getInitialProps = async () => {
    try{
        const res = await axios('https://api.thesneakerdatabase.com/v1/sneakers?limit=80')
        return { sneakers: res.data }
    }
    catch(err){
        console.log(err)
        return
    }
}

export default index
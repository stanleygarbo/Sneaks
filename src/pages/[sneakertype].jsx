import React from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import Cards from '../components/cards/Cards'
import Head from 'next/head'

const sneakertype = ({sneakers}) => {
    return (
        <Layout>
            <Head>
                <title>Sneaks | {sneakers.results[0]?.brand} sneakers</title>
                <meta name='description' content={`${sneakers.results[0]?.brand} sneakers`} />
            </Head>
            {console.log(sneakers)}
            {sneakers && <Cards sneakers={sneakers} />}
        </Layout>
    )
}

sneakertype.getInitialProps = async (ctx) =>{
    let { query } = ctx
    console.log(query.sneakertype)
    const url = `https://api.thesneakerdatabase.com/v1/sneakers?limit=20&brand=${query.sneakertype}`
    const res = await axios(url)
    return { sneakers: res.data }
}

export default sneakertype

import Head from 'next/head'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import LatestPost from '../components/LatestPost'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>kania.codes blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.5"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Header mainText=""></Header>
      <Banner
        links={[
          {text: 'Posts', link: '#'},
          {text: 'About', link: '#'},
          {text: 'Testing', link: '#'},
          {text: 'Props', link: '#'}
        ]}
      ></Banner>
      <LatestPost
        title="The cake is a lie"
        desc="Some clever description"
        link="#"
        date={Date.now()}
        background="https://vintagestores.com.ng/wp-content/uploads/2021/04/gPvyaz76tASn87RCGuSdDc.jpg"
      ></LatestPost>
      <Footer copyright="Copyright Wiktor Kania ©"></Footer>
    </>
  )
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       data: {}
//     }
//   }
// }

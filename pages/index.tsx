import Head from 'next/head'

import styles from '../styles/main.module.scss'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Kania Codes Blog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Header mainText=""></Header>
      <Banner backgroundSrc={"/images/dummy-mountains.jpeg"}></Banner>
      <div style={{margin: '200px auto', width: '500px', textAlign: 'center', fontSize: '40px'}}>I'm making a note here</div>
      <div style={{margin: '50px auto', width: '500px', textAlign: 'center', fontSize: '10px'}}>Huge success</div>
    </>
  )
}

let counter = 0;

export async function getServerSideProps() {
  // Pass data to the page via props
  return {props: {data: {counter: counter++}}}
}

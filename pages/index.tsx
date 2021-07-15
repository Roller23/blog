import Head from 'next/head'

import styles from '../styles/main.module.scss'

export default function Home({data}) {
  return (
    <>
      {/* <Head>
        <title>Kania Codes Blog</title>
      </Head>
      <h1>hi Ada</h1>
      <h1>Counter {data.counter}</h1>
      <h1 className='test'>Dummy {JSON.stringify(data.dummy)}</h1>
      <h1 className={styles.test}>
        <div>Hi</div>
        <span className={styles.hello}>There</span>
      </h1> */}
      <h1>Work in progress</h1>
    </>
  )
}

let counter = 0

export async function getServerSideProps() {
  // Pass data to the page via props
  let dummy: Dummy = {name: 'Wiktor'}
  return {props: {data: {counter: counter++, dummy}}}
}

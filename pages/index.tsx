import Head from 'next/head'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import LatestPost from '../components/LatestPost'

import styles from '../styles/index.module.scss'
import Post from '../components/Post'

import { getBlogDb } from '../util/mongodb/mongodb'

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
        background="https://rapidfix4you.co.uk/wp-content/uploads/2020/07/macbook-air.jpg"
      ></LatestPost>
      <div className={styles.postsWrapper}>
        <Post
          title="The Engineer is a spy"
          desc="And I cry when angels deserve to die"
          link="#"
          date={Date.now()}
          background="https://d29rinwu2hi5i3.cloudfront.net/article_media/54609b66-bd7d-4153-9bda-750b2ffb2c78/06_cubase_midi.jpg"
        ></Post>
        <Post
          title="Happy little bugs"
          desc="You can make 'em wherever you want. It's your code"
          link="#"
          date={Date.now()}
          background="https://fivethirtyeight.com/wp-content/uploads/2014/04/bob-ross.jpg?w=1024"
        ></Post>
        <Post
          title="Wake me up"
          desc="Before you go go"
          link="#"
          date={Date.now()}
          background="https://miro.medium.com/max/1200/1*t5KNabwstG5jM4DuB3N7rQ.png"
        ></Post>
        <Post
          title="I am hardcoded"
          desc="Database coming soon baby"
          link="#"
          date={Date.now()}
          background="https://hassancorrigan.com/static/4f9e4d81dd3f2d4c1a39d6ee27bbf002/ace28/nextjs-back-button.jpg"
        ></Post>
      </div>
      <Footer copyright="Copyright Wiktor Kania ©"></Footer>
    </>
  )
}

export async function getServerSideProps() {
  const {db, err} = await getBlogDb()
  let articles = []
  if (err) {
    console.log('An error occured with connecting to db', err)
  } else {
    articles = await db.collection('articles').find({}).toArray()
  }
  return {
    props: {
      data: {articles}
    }
  }
}

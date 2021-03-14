import Head from "next/head";
import styles from "../styles/Home.module.scss";
import "antd/dist/antd.css";
import Benifits from '../components/layout/benifits'
import HowTo from '../components/layout/howToUse'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Benifits/>
        <HowTo/>
       </main>
     
    </div>
  );
}

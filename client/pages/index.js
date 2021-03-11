import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import WhatWeOfferModal from "../components/WhatWeOfferModal";
import OrderModal from "../components/OrderModal";
import BenefitModal from "../components/BenefitModal";
import "antd/dist/antd.css";
import ContactUs from "../components/ContactUs";

export default function Home() {
  const [whatVisible, setWhat] = useState(false);
  const [orderVisible, setOrder] = useState(false);
  const [benifitsVisible, setBenifits] = useState(false);
  const [contactVisible, setContact] = useState(false);
  const whatClose = () => {
    setWhat(false);
  };

  const orderClose = () => {
    setOrder(false);
  };
  const benifitsClose = () => {
    setBenifits(false);
  };
  const contactClose = () => {
    setContact(false);
  };
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
        <h1 className={styles.title}>Saffron</h1>

        <div className={styles.grid}>
          <div className={styles.card} onClick={() => setBenifits(true)}>
            <h2>Benefits</h2>
          </div>
          <div className={styles.card} onClick={() => setWhat(true)}>
            <h2>What We Offer</h2>
          </div>
          <div className={styles.card} onClick={() => setOrder(true)}>
            <h2>Order</h2>
          </div>
          <div className={styles.card} onClick={() => setContact(true)}>
            <h2>Contact Us Directly</h2>
          </div>
        </div>
      </main>
      <WhatWeOfferModal onClose={whatClose} show={whatVisible} />
      <ContactUs onClose={contactClose} show={contactVisible} />
      <BenefitModal onClose={benifitsClose} show={benifitsVisible} />
      <OrderModal onClose={orderClose} show={orderVisible} />
      <footer className={styles.footer}>
        <p>Made By Amel Ul Mulk : </p>
        <p>03478204948</p>
      </footer>
    </div>
  );
}

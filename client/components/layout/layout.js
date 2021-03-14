import React from 'react'
import styles from "../../styles/Home.module.scss";
const layout = (props) => {
    return (
        <>
        <div className={styles.nav}>
            <h2>Saffron</h2>
            <div className={styles.para}>
            <p>Only one ounce of saffron spice needs a lot of efforts, tough labor and picking more than 7,000 purple saffron flowers. <br/> The flower’s red antenna or sargol saffron must be  picked by hands individually and then dried in  best conditions.<br/> These procedures make saffron rare and make its mass production limited. Fortunately, only small amounts of saffron spice are required in cooking.<br/> It is also the most expensive spice in the world, weight for weight being worth more than gold and using it in any food make it a luxurious dish.</p>
            </div>
            <div className={styles.navcontent}>
             <a href='#about-us'>About Us</a>
              <a href='#contact-us'>Contact Us</a>
              <a href="#order">Order</a>
            </div>
        </div>
          {props.children}
        <footer className={styles.footer}>
        <p>Made By Amel Ul Mulk : </p>
        <p>03478204948</p>
      </footer>
        </>
    )
}

export default layout

import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Home.module.scss";
const benifits = () => {
    return (
        <div className={styles.middlereverse} >
            <Image src="/safronuse.jpg" alt="me" width="800" height="600" />
             <div className={styles.benifits}>
           <h2> HOW TO USE SAFFRON?</h2>  
              <ul>
             
     <li>Saffron is a very delicious spice which is used in many cuisines. It adds a different distinct sweet flavor and a bright yellow color to dishes and drinks</li>
<li>In order to consume saffron the best way, you should crush and soak the saffron threads in hot water for about 15 minutes, and then add the water to your recipe. It needs moisture to re-hydrate, release its full flavor vibrant color.</li>
<li>For instant way of consuming saffron spices,  just add 5 tbsps of liquid for each tbsps of saffron; let it soak for at least 20 minutes. Using a spoon, mash the saffron threads to form a thick paste. When required, you can add the paste to the food or dish.</li>

              </ul>
             </div>
        </div>
    )
}

export default benifits

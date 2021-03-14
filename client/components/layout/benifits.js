import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Home.module.scss";
const benifits = () => {
    return (
        <div className={styles.middle} >
            <Image src="/safron.jpg" alt="me" width="800" height="600" />
             <div className={styles.benifits}>
           <h2> BENEFIT OF SAFFRON SPICE</h2>  
              <ul>
             
     <li>Saffron Spice increases the Serotonin Levels in the Brain that is Responsible for Maintaining a Good Mood.</li>
<li>Saffron is Also the Best Appetite Suppressant, and Control Food Craving.</li>
<li>In Addition, Saffron is Good for Weight Loosening.</li>
<li>Many Researchers Claimed that Saffron is a Good Sexual Drive Stimulator.</li>
<li>Also, Saffron Claimed to be an effective natural Anti-Depressant.</li>
<li>Furthermore, Saffron Claimed to have potential as an Anti-Cancer and natural pain reliever.</li>
<li>A Cup of Saffron Tea is Good for Attention, Sleep and Memory.</li>
<li>Most of All, Saffron is Rich of Antioxidants, Vitamin B2 and Riboflavin.</li>
              </ul>
             </div>
        </div>
    )
}

export default benifits

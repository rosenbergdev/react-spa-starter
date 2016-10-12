import React from 'react'
import styles from './styles.styl'

const Site = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.lead}>
        <h1 className={styles.alpha}>I do code and stuff;</h1>
        <h2 className={styles.beta}>
          <a className={styles.link} href="https://github.com/rosenbergdev/react-spa-starter">{'<Github />'}</a>
        </h2>
      </div>
    </div>
    <div className={styles.social}>
      <a className={styles.link} target='_blank' href="https://www.facebook.com/rosenberg.martin">{'<Facebook />'}</a>
      <a className={styles.link} target='_blank' href="https://twitter.com/rosenbergmartin">{'<Twitter />'}</a>
      <a className={styles.link} target='_blank' href="https://www.linkedin.com/in/martin-rosenberg-36281a58?trk=hp-identity-photo">{'<LinkedIn />'}</a>
    </div>
  </div>
)

export default Site

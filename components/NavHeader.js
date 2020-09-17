import React from "react"
import NavItems from "./NavItems"
import styles from "./NavHeader.module.scss"

export default function NavHeader() {
  return (
    <div className={styles.Header}>
      <div className={styles.DesktopNavItems}>
        <NavItems />
      </div>
    </div>
  )
}

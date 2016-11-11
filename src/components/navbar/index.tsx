import * as React from "react";

const withStyles: (styles: any) => Function = require("isomorphic-style-loader/lib/withStyles").default;
const styles = require("./navbar.scss");

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className={styles.navbarWrapper}>
        <ul>
          <li className={styles.navbarItem}>EmoLogic</li>
          <li className={styles.navbarItem}>TylorShin</li>
          <li className={styles.navbarItem}>Diary</li>
          <li className={styles.navbarItem}>TIL</li>
          <li className={styles.navbarItem}>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);

import * as React from "react";

const withStyles: (styles: any) => Function = require("isomorphic-style-loader/lib/withStyles").default;
const styles = require("./aboutCo.scss");

class AboutCo extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={styles.aboutCoWrapper}>
        <div className={styles.headerWrapper}>
          <img src="http://res.cloudinary.com/pengyou/image/upload/v1478930471/think-baby-cut_g4uw4s.jpg" />
          <h1 className={styles.headline}>What makes <b>AWESOME</b> product?</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutCo);

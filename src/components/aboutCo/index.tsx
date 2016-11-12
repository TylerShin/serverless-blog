import * as React from "react";

const withStyles: (styles: any) => Function = require("isomorphic-style-loader/lib/withStyles").default;
const styles = require("./aboutCo.scss");

class AboutCo extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={styles.aboutCoWrapper}>
        <div className={styles.headerWrapper}>
          <img src="http://res.cloudinary.com/pengyou/image/upload/v1478944663/think-baby-cut_pkkcaf.jpg" />
          <div className={styles.headerSection}>
            <div className={styles.mainHeader}>
              <div>WHAT</div>
              <div>MAKES</div>
              <div>THE</div>
              <div><b>AWESOME</b></div>
              <div>PRODUCT?</div>
            </div>
            <div className={styles.subHeader}>
              we must start with this question
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutCo);

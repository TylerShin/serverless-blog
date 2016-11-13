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
              we must start with this question.
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentHeader}>I believe that there are things we have to pursue.</div>
          <ul>
            <li className={`${styles.listItem} clearfix`}>
              <div className={styles.listLeftBlock}>Emotion</div>
              <div className={styles.listRightBlock}>
                The nice products usually touch our emotion. and it usually becomes our reason to keep using the products.
              </div>
            </li>
            <li className={`${styles.listItem} clearfix`}>
              <div className={styles.listLeftBlock}>Logic</div>
              <div className={styles.listRightBlock}>
                It's essential to have the logical, engineered values.
                Stability, High-performance, Organized algorithm, etc...
              </div>
            </li>
            <li className={`${styles.listItem} clearfix`}>
              <div className={styles.listLeftBlock}>Influence</div>
              <div className={styles.listRightBlock}>
                Our product must change our life styles, make the world a better place.
              </div>
            </li>
          </ul>
        </div>
        <div className={`${styles.emotionBlockWrapper} clearfix`}>
          <div className={styles.emotionBlockLeftBox}>
            <img src="http://res.cloudinary.com/pengyou/image/upload/v1479021556/emotion_byukcq.jpg" />
          </div>
          <div className={styles.emotionBlockRightBox}>
            <div className={styles.emotionBlockRightBoxContent}>
              <div className={styles.emotionBlockHeader}>Check app store chart.</div>
              <div className={styles.emotionBlockContent}>
                Almost every apps on high charted is concerned with our emotion. <br />
                Our product must touch people's mind and connect them in a good way.  <br />
                Product's first goal should be user and what user feel. <br />
                This could be satisified with design, product itself, or other users.
              </div>
            </div>
          </div>
        </div>
        <img src="http://res.cloudinary.com/pengyou/image/upload/v1479019812/products_yvvreh.jpg" />
      </div>
    );
  }
}

export default withStyles(styles)(AboutCo);

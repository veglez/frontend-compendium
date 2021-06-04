
    import React from "react";
    import Styles from "@styles/APCM.module.scss";
    import iconShare from "@images/APCM/icon-share.svg";
import iconPinterest from "@images/APCM/icon-pinterest.svg";
import iconFacebook from "@images/APCM/icon-facebook.svg";
import iconTwitter from "@images/APCM/icon-twitter.svg";

    
    const ArticlePreviewComponentMaster = () => {
    return(
            <div className={Styles.container}>
            <h1> Estas en la página ArticlePreviewComponentMaster </h1>
            <section>Shift the overall look and feel by adding these wonderful touches to
    furniture in your home Ever been in a room and felt like something was
    missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple
    tips to help you make any room feel complete. Michelle Appleton 28 Jun 2020
    Share
  </section>
            </div>
        );
    };
    

    export default ArticlePreviewComponentMaster;
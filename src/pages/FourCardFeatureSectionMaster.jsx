
    import React from "react";
    import Styles from "@styles/FCFSM.module.scss";
    import iconTeamBuilder from "@images/FCFSM/icon-team-builder.svg";
import iconKarma from "@images/FCFSM/icon-karma.svg";
import iconCalculator from "@images/FCFSM/icon-calculator.svg";
import iconSupervisor from "@images/FCFSM/icon-supervisor.svg";

    
    const FourCardFeatureSectionMaster = () => {
    return(
            <div className={Styles.container}>
            <h1> Estas en la página FourCardFeatureSectionMaster </h1>
            <section>Reliable, efficient delivery
  Powered by Technology

  Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful

  Supervisor
  Monitors activity to identify project roadblocks

  Team Builder
  Scans our talent network to create the optimal team for your project

  Karma
  Regularly evaluates our talent to ensure quality

  Calculator
  Uses data from past projects to provide better delivery estimates

  
  </section>
            </div>
        );
    };
    

    export default FourCardFeatureSectionMaster;
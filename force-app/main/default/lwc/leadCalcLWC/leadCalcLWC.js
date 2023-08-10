import { LightningElement, track } from 'lwc';

export default class LeadCalcLWC extends LightningElement {
  // Total Interest Score is 1-50. 
  Score = 60;

  get getScore (){
    let progressCircle = this.template.querySelector('[data-id="progress-cirle"]');
      if(progressCircle){
        this.template.querySelector('[data-id="progress-cirle"]').className=`progress-circle p${this.Score}`;
        console.log("setProgressCircleClass(): "+ progressCircle);
      }        
    return this.Score;
  }

  get getScore(){
    return "p" + this.Score;
  } 

  get constructClass(){
    return "gauge four rischio1" + " " + "p"+this.Score;
  }
}
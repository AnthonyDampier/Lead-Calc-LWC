import { LightningElement, track } from 'lwc';

export default class LeadCalcLWC extends LightningElement {
  // Total Interest Score is 1-50. 
  Score = 10;

  get getScore(){
    return "p" + this.Score;
  } 

  get constructClass(){
    return "gauge four rischio1" + " " + "p"+this.Score;
  }
}
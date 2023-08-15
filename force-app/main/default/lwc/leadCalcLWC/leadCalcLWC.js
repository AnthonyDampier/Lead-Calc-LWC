import { LightningElement, track, api, wire } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import Total_Interest_Score from '@salesforce/schema/Lead.Total_Interest_Score__c';

export default class LeadCalcLWC extends LightningElement {
  // get recordId
  @api recordId;
  @track error;

  @wire(getRecord, {
    recordId: "$recordId",
    fields: [Total_Interest_Score]
  }) 
  lead;

  get totalInterestScore(){
    return getFieldValue(this.lead.data, Total_Interest_Score);
  }

  get getStrokeDasharray(){
    let percentage = Math.floor((getFieldValue(this.lead.data, Total_Interest_Score)/50)*100)
    return percentage + ", 100";
  }

  // guage
    // get constructClass(){
  //   return "gauge four rischio1" + " " + "p"+this.totalInterestScore();
  // }
  // guage
}
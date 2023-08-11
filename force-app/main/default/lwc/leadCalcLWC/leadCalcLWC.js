import { LightningElement, track, api, wire } from 'lwc';
import { getRecord } from "lightning/uiRecordApi";

export default class LeadCalcLWC extends LightningElement {
  // get recordId
  @api recordId;
  @track name;
  @track email;
  @track error;

  // not working...
  @wire(getRecord, {
    recordId: "$recordId",
    fields: [NAME_FIELD, EMAIL_FIELD]
    }) wireuser({
        error,
        data
    }) {
    if (error) {
      console.log(error);
      this.error = error ; 
    } else if (data) {
      console.log(data.fields);
        this.email = data.fields.Email.value;
        this.name = data.fields.Name.value;
    }
}

  get name() {
    return this.contact.data.fields.Name.value;
  }

  get title() {
    return this.contact.data.fields.Title.value;
  }

  get phone() {
    return this.contact.data.fields.Phone.value;
  }

  get email() {
    return this.contact.data.fields.Email.value;
  }
  
  // Total Interest Score is 1-50. 
  Score = 40;

  get getScore(){
    return this.Score;
  }

  get constructClass(){
    return "gauge four rischio1" + " " + "p"+this.Score;
  }

  // Radial Progress Bar
  Percent = this.Score/50;

  get getStrokeDasharray(){
    return Math.floor(this.Percent*100) + ", 100";
  }
  // Radial Progress Bar
}
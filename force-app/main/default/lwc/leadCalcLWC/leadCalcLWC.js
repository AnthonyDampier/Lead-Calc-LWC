import { LightningElement, track } from 'lwc';
import LeadCalcCSS from './leadCalcLWC.css';

export default class LeadCalcLWC extends LightningElement {

    renderedCallback() {
        loadScript(this, jQueryUrl + '/jquery-3.5.1.min.js')
          .then(() => {
            console.log(`jQuery loaded.`);
          })
          .catch((error) => {
            console.log(`jQuery loading was failed.`);
          });
      }

    @track Score = 85;

    getScore = `--percent: "${Score}";`;

    static stylesheets = [
        LeadCalcCSS,
        `--percent: 25`
    ];
}

// subclass components don't inherit stylesheet. To address this issue to extend the Parent's stylesheet to the child
class SubClass extends LeadCalcLWC {
    static stylesheets = LeadCalcCSS.stylesheets;
}
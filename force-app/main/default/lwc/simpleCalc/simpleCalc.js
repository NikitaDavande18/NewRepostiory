import { LightningElement, track } from "lwc";

export default class SimpleCalc extends LightningElement {
  @track num1;
  @track num2;
  @track result;

  calcExpr() {
    this.result = Number(this.num1) + Number(this.num2);
  }
  calcExpr2() {
    this.result = Number(this.num1) - Number(this.num2);
  }
  calcExpr3() {
    this.result = Number(this.num1) * Number(this.num2);
  }
  calcExpr4() {
    this.result = Number(this.num1) / Number(this.num2);
  }

  handleChangeNum1(evt) {
    this.num1 = evt.target.value;
  }
  handleChangeNum2(evt) {
    this.num2 = evt.target.value;
  }
}
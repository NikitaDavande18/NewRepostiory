import { LightningElement, track } from 'lwc';

export default class LifeCycle extends LightningElement {
    @track variable;   
   connectedCallback(){
        this.template.querySelector('div');
        console.log(this.template.querySelector('lightning-button'));
        console.log(this.template.querySelector('div'));
        console.log(this.template.querySelector('h1'));
   }    
}
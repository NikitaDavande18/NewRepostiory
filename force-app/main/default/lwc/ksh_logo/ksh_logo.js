import { LightningElement } from 'lwc';

export default class Ksh_logo extends LightningElement {
    renderedCallback()  //function used for conditional rendering and use to override the standard rendering functionality
    {
       //setTimeout(()=>{  
       //    this.template.querySelector("[data-id='logo-class']").className = "u-icon u-icon-circle u-text-palette-1-base u-icon-2";
       //}, 100);
   }
}
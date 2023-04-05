import { LightningElement } from 'lwc';

export default class SampleForm extends LightningElement {
    handleFieldChanged(e) 
    {
        this.formData[e.target.name] = e.target.value;
     
    }
}
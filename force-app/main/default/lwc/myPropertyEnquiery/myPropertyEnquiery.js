import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class PropertyEnquiery extends LightningElement {
    @api propertyId;
    @api recordId;
    @api objectApiName;
    
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title :"Feedback Submitted",
            message :"Success",
            variant :"success"
        });
        this.dispatchEvent(evt);
    }
}
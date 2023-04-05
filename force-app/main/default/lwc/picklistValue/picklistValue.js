import { LightningElement, wire, api, track } from 'lwc'; 
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

import { getPicklistValues } from 'lightning/uiObjectInfoApi';

import Opportunity_OBJECT from '@salesforce/schema/Opportunity';

import StageName_FIELD from '@salesforce/schema/Opportunity.StageName';
export default class PicklistValue extends LightningElement {
    @api recordId;
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
    }

}
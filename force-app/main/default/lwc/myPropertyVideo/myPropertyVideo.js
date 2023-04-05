import { LightningElement,api,wire } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Property__c';

import { getRecord } from 'lightning/uiRecordApi';

import ADDRESS_FIELD from '@salesforce/schema/Property__c.Name';

export default class MyPropertyVideo extends LightningElement {
    Property__c = CASE_OBJECT;
    @api property;
    @wire(getRecord, { recordId: '$recordId', fields: [ADDRESS_FIELD] })
    project;

    //zoomLevel = 5;

}
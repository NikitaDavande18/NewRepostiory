import { LightningElement } from 'lwc';
import PROP_OBJECT from '@salesforce/schema/Property1__c';

import CASENUMBER_FIELD from '@salesforce/schema/Property1__c.street__c';
const fields = [CASENUMBER_FIELD]
export default class Ash_feild extends LightningElement 
{

    Property1__c = CASE_OBJECT;

    CASENUMBER_FIELD=street__c;

}
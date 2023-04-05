/*import { LightningElement, api, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/ContactController.getContacts';
export default class WireApexProperty extends LightningElement {
    @api recordId;
    @wire(getRelatedContacts, { contactsId: '$recordId' })
    contacts;
}*/
import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/idsUtils';
import FIRST_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: FIRST_FIELD .fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: LAST_FIELD .fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL_FIELD .fieldApiName, type: 'Email' }
];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;

    get errors()
     {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}
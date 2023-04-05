import { LightningElement, api, track} from 'lwc';

export default class main extends LightningElement {
    @api property;
    //@api propertyOwnerId;
    //@api propertyFound;
    //@api propertyId;
    @track error;
 
   
    //wiredProperties({ data, error }) {
        //console.log('WiredProp propId' + this.propertyId);
        if (data) {
            this.property = data;
            //this.propertyFound = true;
            // this.propertyOwnerId = this.property.data.fields.Property_Owner__c.value;
           // console.log('WiredProp propertyOwnerId' + this.propertyOwnerId);
        } else (error) {
            this.showToast('ERROR', error.body.message, 'error');
        }
    }
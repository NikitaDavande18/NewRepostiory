import { LightningElement,api,wire,track } from 'lwc';
import getDetails from '@salesforce/apex/PropertyDetais.getDetails';
export default class PropertyLocation extends LightningElement {
    @api property;
    @api propertyId;
    @api propertyFound = false;
    @track mapMarkers = [];
    @wire(getDetails,{propId:'$propertyId'})
    wiredProperties({data, error}){
        if(data){
            this.property = data;
            this.mapMarkers = [
                {
                    location: {
                        Street: this.property.fields.street__c.value,
                        City: this.property.fields.Area__c.value,
                        State: this.property.fields.Area__c.value,
                    },
        
                    title: 'Location of property',
                    description:
                        'Property location',
                },
            ]; 
        } else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    }
    
    zoomLevel =4;  
}
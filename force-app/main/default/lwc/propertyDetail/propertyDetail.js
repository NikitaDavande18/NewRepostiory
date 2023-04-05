/* eslint-disable no-console */
import { LightningElement, api } from 'lwc';
//import getDetails from '@salesforce/apex/PropertyDetais.getDetails';
export default class PropertyDetail extends LightningElement {
    @api property;
    @api propertyFound;
    /*@api propertyId;
    @track error;
    @api propertyFound=false;
   
    @wire(getDetails,{propId:'$propertyId'})
        wiredProperties({data, error}){
            console.log('WiredProp propId'+this.propertyId);
            if(data){
                this.property = data;
                this.propertyFound = true;
                console.log('WiredProp prop'+this.property);
            } else if(error){
                this.showToast('ERROR', error.body.message, 'error');
            }
        }
    */

}
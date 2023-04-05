import { LightningElement, track,wire } from 'lwc';
import getPropertyImages from '@salesforce/apex/PropertyImage.getPropertyImages';
export default class PropertyImageDetails extends LightningElement {
    @track images=[];
    @wire(getPropertyImages)
    wiredImages({data, error}){
        if(data){
            for(let key in data){
                if (data.hasOwnProperty(key)) {
                    this.images.push('/sfc/servlet.shepherd/version/download/'+key.ContentDocumentId);
                }
            }
           // this.ContentDocumentLinks = data;
        } else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    }
}
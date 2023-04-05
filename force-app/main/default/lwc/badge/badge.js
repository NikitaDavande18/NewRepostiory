import { LightningElement } from 'lwc';
export default class Badge extends LightningElement {
viewPdf() {
      this[NavigationMixin.Navigate]({
        type: 'standard__namedPage',
        attributes: {
            pageName: 'filePreview'
        },
        state : {
            recordIds: '0695g0000031UDdAAM' //your ContentDocumentId here
        }
      });
    }
}
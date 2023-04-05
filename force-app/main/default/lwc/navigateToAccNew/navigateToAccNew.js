import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToAccountListView extends NavigationMixin(LightningElement) {
    NavigateToAccNew(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            },
            
            state:{
          
                defaultFieldValues:'AccountNumber=1234,Name=PRANIT,NumberOfEmployees=250',
                nooverride:'1'
            }
 
        });
    }
}
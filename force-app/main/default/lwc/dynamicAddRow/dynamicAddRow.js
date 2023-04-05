import { LightningElement, track,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNTNUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import saveAccounts from '@salesforce/apex/AccountController.saveAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateDynamicRecord extends LightningElement {
    @track accountList = []; 
    @track index = 0;
    @api recordId;
    @track name = NAME_FIELD;
    @track industry = ACCOUNTNUMBER_FIELD;
    @track phone = PHONE_FIELD;

    @api record = {
        firstName : '',
        lastName : '',
        Email : '',
        Phone : '',
        Title : ''
    }

    addRow(){

        this.index++;
   
        this.accountList.push ({
            
            AccountName: '',
            AccountNumber : '',
            Phone: ''
        });

        console.log('Enter ',this.accountList);
        
       // this.accountList.push(this.record);
        //console.log(' After adding Record List ', this.accountList);
    }
    
    removeRow(){

        var index = this.index;
      
        if(this.accountList.length>1)
           this.accountList.splice(index, 1);

        //this.dispatchEvent(new CustomEvent('deleterow', {detail: this.index}));
        //console.log(' After adding Record List ', this.dispatchEvent);
    } 

    acc = {
        Name : this.name,
        AccountNumber : this.accNumber,
        Phone : this.phone
    }

    handleNameChange(event) {
        this.acc.Name = event.target.value;
        console.log("name", this.acc.Name);
    }
    
    handleAccountNumberChange(event) {
        this.acc.AccountNumber = event.target.value;
        console.log("AccountNumber", this.acc.AccountNumber);
    }
    
    handlePhoneChange(event) {
        this.acc.Phone = event.target.value;
        console.log("Phone", this.acc.Phone);
    }
    
    saveRecord(){        
        saveAccounts(this.acc.accountList)
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.acc.Name = '';
                    this.acc.AccountNumber = '';
                    this.acc.Phone = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Account created successfully',
                            variant: 'success',
                        }),
                    );
                }
                
                console.log(JSON.stringify(result));
                console.log("result", this.message);
                /*console.log(' After adding Record List ', result);
                this.accountList = result;
                console.log(' After adding Record List ', this.accountList);*/
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }
      
}
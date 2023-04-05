/* eslint-disable no-console */
import { LightningElement,track,wire,api } from 'lwc';
import getLatestProperty from '@salesforce/apex/PropertyDetais.getLatestProperty';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
import getSearchedProperty from '@salesforce/apex/PropertyDetais.getSearchedProperty';
export default class ProperyResult extends NavigationMixin (LightningElement) {
    @track properties;
    @track propOwnerId;
    @track feedbackPropertyId;
    @track propid;
    @api openOwnerDetails=false;
    @api openFeedbackDetails = false;
    @track locfilter;
    @track bedroomfilter;
    @track bathroomfilter;
    @track budgetfilter;
    @wire(getLatestProperty)
    wiredProperties({data, error}){
        if(data){
            this.properties = data;
        } else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    }
    @wire(CurrentPageReference) pageRef;
    connectedCallback() {
        registerListener("handelLocFilterChange", this.handelLOCFilterChange, this);
        registerListener("handelBedRoomFilterChange", this.handelBedroomFilterChange, this);
        registerListener("handelBathRoomFilterChange", this.handelBathRoomFilterChange, this);
        registerListener("handelBudgetFilterChange", this.handelBudgetFilterChange, this);
      }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }
    handelLOCFilterChange(locchange){
        console.log('handelLocFilterChange locchange'+locchange);
        this.locfilter = locchange;
        getSearchedProperty({
            location: this.locfilter,
            bedroom:this.bedroomfilter,
            bathroom:this.bathroomfilter,
            maxbudget:this.budgetfilter
        })
        .then(result=>{
            this.properties = result;
        })
        .catch(error=>{
            this.showToast('ERROR', error.body.message, 'error');
        });
    }
    handelBedroomFilterChange(bedroomChange){
        console.log('handelLocFilterChange bedroomChange'+bedroomChange);
        this.bedroomfilter = bedroomChange;
        getSearchedProperty({
            location: this.locfilter,
            bedroom:this.bedroomfilter,
            bathroom:this.bathroomfilter,
            maxbudget:this.budgetfilter
        })
        .then(result=>{
            this.properties = result;
        })
        .catch(error=>{
            this.showToast('ERROR', error.body.message, 'error');
        });
    }
    handelBathRoomFilterChange(bathRoomChange){
        console.log('handelLocFilterChange bathRoomChange'+bathRoomChange);
        this.bathroomfilter = bathRoomChange;
        getSearchedProperty({
            location: this.locfilter,
            bedroom:this.bedroomfilter,
            bathroom:this.bathroomfilter,
            maxbudget:this.budgetfilter
        })
        .then(result=>{
            this.properties = result;
        })
        .catch(error=>{
            this.showToast('ERROR', error.body.message, 'error');
        });
    }
    handelBudgetFilterChange(budgetChange){
        console.log('handelLocFilterChange budgetChange'+budgetChange);
        this.budgetfilter = budgetChange;
        getSearchedProperty({
            location: this.locfilter,
            bedroom:this.bedroomfilter,
            bathroom:this.bathroomfilter,
            maxbudget:this.budgetfilter
        })
        .then(result=>{
            this.properties = result;
        })
        .catch(error=>{
            this.showToast('ERROR', error.body.message, 'error');
        });
    }    
    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
    get propertiesFound(){
        if(this.properties){
            return true;
        }
        return false;
    }
    ownerDetailsClick(event){
        console.log('selected event'+event);
        this.propOwnerId = event.target.value;
        this.openOwnerDetails = true;
        console.log('selected propOwnerId'+this.propOwnerId);
        console.log('selected openOwnerDetails'+this.openOwnerDetails);
    }
    
    feedbackClicked(event){
        
        this.feedbackPropertyId = event.target.value;
        this.openFeedbackDetails = true;   
    }
    closeFeedbackModal() {
        this.openFeedbackDetails = false;    
    }
    closeOwnerModal() {
        this.openOwnerDetails = false;    
    }
    NavigateToPropDetails(event){
        console.log('Inside NavigateToPropDetails');
        this.propid = event.target.value;
        console.log('Inside this.propid'+this.propid);
        //console.log('Inside this.propDisplay'+this.propDisplay.Furnished_Type__c);
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__Property360View'
            }, 
            state: {
                c__propertyId:this.propid
            }   
        });
    }
}
import {LightningElement} from 'lwc';

//APEX-Methods
import getAccounts from '@salesforce/apex/SfWiki_Handler.getAccounts'
import getContacts from '@salesforce/apex/SfWiki_Handler.getContacts'

export default class LwcNavigateThroughComponents extends LightningElement {

    step;
    showSpinner;
    //First Page
    showFirstPage = true;
    //Second Page
    showSecondPage;
    //Third Page
    showThirdPage;
     //Fourth page
    showFourthPage;

    connectedCallback() {
        this.getInitData();
    }

    getInitData() {
        this.showSpinner = true;
        getAccounts({})
            .then(data => {
                
                this.showSpinner = false;
            })
            .catch(error => {
                console.log(error);
            });
    }

    nextPage(event) {
        this.setAllStepsToFalse();
        this.step = event.target.value;

        if(this.step === "1") 
        {
            this.showFirstPage = true;
        } 
        else if(this.step === "2") 
        {
            this.showSecondPage = true;
        } 
        else if(this.step === "3")
        {
            this.showThirdPage = true;
        }
        else if(this.step === "4")
         {
            this.showSpinner = true;
            getContacts({})
                .then(data => {
                    
                    this.showSpinner = false;
                    this.showFourthPage = true;
                })
                .catch(error => {
                    console.log(error);
                });
        }

    }

    previousPage(event) {
        this.setAllStepsToFalse();
        this.step = event.target.value;

        if(this.step === "1") {
            this.showFirstPage = true;
        } else if(this.step === "2") {
            this.showSecondPage = true;
        }
        else if(this.step === "3") {
            this.showThirdPage = true;
         }
        else if(this.step === "4")
        {
            this.showFourthPage = true;
        }
    }

    setAllStepsToFalse() 
    {
        this.showFirstPage = false;
        this.showSecondPage = false;
        this.showThirdPage = false;
        this.showFourthPage = false;
    }
    get optionsPartner() {
        return [
            { label: 'Automotive', value: 'au' },
            { label: 'Biotech', value: 'bio' },
            { label: 'Business Services', value: 'bus' },
            { label: 'Consumer Goods', value: 'goods' },
            { label: 'Consumer Services', value: 'co' },
            { label: 'EDU & Universities', value: 'edu' },
            { label: 'Energy & Utilities', value: 'ener' },
            { label: 'Entertainment', value: 'en' },
            { label: 'Financial, Banking, Insurance', value: 'fin' },
            { label: 'Food & Beverage', value: 'food' },
            { label: 'Gaming', value: 'ga' },
            { label: 'Government & NPO', value: 'gov' },
            { label: 'Hardware', value: 'hw' },
            { label: 'Health & Wellness', value: 'he' },
            { label: 'Industrial & Manufacturing', value: 'in' },
            { label: 'Media, Publishing, Broadcasting', value: 'me' },
            { label: 'Professional Services', value: 'pro' },
            { label: 'Real Estate', value: 'rea' },
            { label: 'Retail', value: 'ret' },
            { label: 'Software', value: 'sw' },
            { label: 'Technology', value: 'tech' },
            { label: 'Telecommunication', value: 'tele' },
            { label: 'Travel & Hospitality', value: 'traval' },
        ];
    }
    handleChangePartner(e) {
        this._selected = e.detail.value;
    }
    handleChangeTracks(event) {
        let i;
        let checkboxes = this.template.querySelectorAll('[data-id="checkbox"]')
        for(i=0; i<checkboxes.length; i++) {
            checkboxes[i].checked = event.target.checked;
        }
    }

    handleChangeTarget (event) {
        let i;
        let checkboxes = this.template.querySelectorAll('[data-id="checkbox"]')
        for(i=0; i<checkboxes.length; i++) {
            checkboxes[i].checked = event.target.checked;
        }
    }
    cloudProviders (event)
    {
         let i;
        let checkboxes = this.template.querySelectorAll('[data-id="checkbox"]')
        for(i=0; i<checkboxes.length; i++) {
            checkboxes[i].checked = event.target.checked;
        }
    }

    monitoringProviders (event)
    {
         let i;
        let checkboxes = this.template.querySelectorAll('[data-id="checkbox"]')
        for(i=0; i<checkboxes.length; i++) {
            checkboxes[i].checked = event.target.checked;
        }
    }
    managementProviders (event)
    {
         let i;
        let checkboxes = this.template.querySelectorAll('[data-id="checkbox"]')
        for(i=0; i<checkboxes.length; i++) {
            checkboxes[i].checked = event.target.checked;
        }
    }
    securityProviders (event)
    {
         let i;
        let checkboxes = this.template.querySelectorAll('[data-id="checkbox"]')
        for(i=0; i<checkboxes.length; i++) {
            checkboxes[i].checked = event.target.checked;
        }
    }
    value = 'no';
    get partnerEntity() {
        return [
            { label: '- Select one -', value: 'selectOne' },
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ];
    }

    partnerEntityChange(event) {
        this.value = event.detail.value;
    }


    value= 'Unitedstates';
    get optionsCountryList() {
        return [
            { label: 'United States', value: 'Unitedstates' },
            { label: 'Canada', value: 'Canada' },
            { label: 'Afghanistan', value: 'Afghanistan' },
        ];
    }
    optionsCountryChange(event) {
        this.value = event.detail.value;
    }

     value= 'Massachusetts';
    get optionsStateList() {
        return [
            { label: 'Alabama', value: 'Alabama' },
            { label: 'Alaska', value: 'Alaska' },
            { label: 'California', value: 'California' },
            { label: 'Georgia', value: 'Georgia' },
            { label: 'Massachusetts', value: 'Massachusetts' },
        ];
    }
    optionsStateChange(event) {
        this.value = event.detail.value;
    }
    
    value = 'five';
    get Revenue() {
        return [
            { label: '- Select one -', value: 'selectOne' },
            { label: 'Under 500,000', value: 'one' },
            { label: '500,000 - 999,999', value: 'two' },
            { label: '1,000,000 - 2,499,999', value: 'three' },
            { label: '2,500,000 - 4,999,999', value: 'four' },
            { label: '5,000,000 - 9,999,999', value: 'five' },
            { label: '10,000,000 - 99,999,999', value: 'six' },
            { label: '100,000,000 - 499,999,999', value: 'seven' },
            { label: '500,000,000 - 999,999,999', value: 'eight' },
            { label: '1,000,000,000+', value: 'nine' },
        ];
    }
     optionsRevenueChange(event) {
        this.value = event.detail.value;
    }
    

}
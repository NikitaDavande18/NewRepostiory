import {LightningElement} from 'lwc';

//APEX-Methods
import getAccounts from '@salesforce/apex/SfWiki_Handler.getAccounts'
import getContacts from '@salesforce/apex/SfWiki_Handler.getContacts'

export default class LwcNavigateThroughComponents extends LightningElement {

    step;
    showSpinner;

    //First Page
    showFirstPage = true;
    listOfAccounts;
    accountColumns = [
        {label: 'Name', fieldName: 'Name', type: 'text', sortable: true, wrapText: false, hideDefaultActions: true},
        {label: 'Phone', fieldName: 'Phone', type: 'text', sortable: true, wrapText: false, hideDefaultActions: true},
        {label: 'Website', fieldName: 'Website', type: 'text', sortable: true, wrapText: false, hideDefaultActions: true},
        {label: 'Industry', fieldName: 'Industry', type: 'text', sortable: true, wrapText: false, hideDefaultActions: true},
        {label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency', sortable: false, wrapText: false, hideDefaultActions: true,
            typeAttributes: {minimumFractionDigits: 2, maximumFractionDigits: 2},
            cellAttributes: {alignment: "left"}}
    ];

    //Second Page
    showSecondPage;

    //Third Page
    showThirdPage;
    listOfContacts;
    contactColumns = [
        {label: 'Name', fieldName: 'Name', type: 'text', sortable: true, wrapText: false, hideDefaultActions: true},
        {label: 'Title', fieldName: 'Title', type: 'text', sortable: true, wrapText: false, hideDefaultActions: true},
        {label: 'Phone', fieldName: 'Phone', type: 'text', sortable: true, wrapText: false, hideDefaultActions: true},
        {label: 'Email', fieldName: 'Email', type: 'text', sortable: true, wrapText: false, hideDefaultActions: true},
        {label: 'Department', fieldName: 'Department', type: 'text', sortable: true, wrapText: false, hideDefaultActions: true}
    ];

    connectedCallback() {
        this.getInitData();
    }

    getInitData() {
        this.showSpinner = true;
        getAccounts({})
            .then(data => {
                this.listOfAccounts = data;
                this.showSpinner = false;
            })
            .catch(error => {
                console.log(error);
            });
    }

    nextPage(event) {
        this.setAllStepsToFalse();
        this.step = event.target.value;

        if(this.step === "1") {
            this.showFirstPage = true;
        } else if(this.step === "2") {
            this.showSecondPage = true;
        } else if(this.step === "3") {
            this.showSpinner = true;
            getContacts({})
                .then(data => {
                    this.listOfContacts = data;
                    this.showSpinner = false;
                    this.showThirdPage = true;
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
    }

    setAllStepsToFalse() {
        this.showFirstPage = false;
        this.showSecondPage = false;
        this.showThirdPage = false;
    }

}
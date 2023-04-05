import { LightningElement, track } from 'lwc';
 
export default class LWCProgressIndicator extends LightningElement {
    @track selectedStep = 'Step1';
 
    handleNext() {
        var getselectedStep = this.selectedStep;
        if(getselectedStep === 'Step1'){
            this.selectedStep = 'Step2';
        }
        else if(getselectedStep === 'Step2'){
            this.selectedStep = 'Step3';
        }
        else if(getselectedStep === 'Step3'){
            this.selectedStep = 'Step4';
        }
    }
 
    handlePrev() {
        var getselectedStep = this.selectedStep;
        if(getselectedStep === 'Step2'){
            this.selectedStep = 'Step1';
        }
        else if(getselectedStep === 'Step3'){
            this.selectedStep = 'Step2';
        }
        else if(getselectedStep === 'Step4'){
            this.selectedStep = 'Step3';
        }
    }
      
    handleFinish() {
        alert('Finished...');
        this.selectedStep = 'Step1';
    }
      
    selectStep1() {
        this.selectedStep = 'Step1';
    }
 
    selectStep2() {
        this.selectedStep = 'Step2';
    }
 
    selectStep3() {
        this.selectedStep = 'Step3';
    }
 
    selectStep4() {
        this.selectedStep = 'Step4';
    }
 
    get isSelectStep4() {
        return this.selectedStep === "Step4";
    }
}
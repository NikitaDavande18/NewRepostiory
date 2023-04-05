import { LightningElement, wire } from "lwc";
import { CurrentPageReference, NavigationMixin } from "lightning/navigation";
export default class StayOnSameTabDemo extends NavigationMixin(
    LightningElement
) {
    activeTab = "Tree1";

    @wire(CurrentPageReference)
    setCurrentPageReference(currentPageReference) {
        this.currentPageReference = currentPageReference;

        if (currentPageReference.state) {
            this.activeTab = currentPageReference.state.c__activeTab;
            console.log("this.activeTab", this.activeTab);
        }
    }

    handleOnActive(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.activeTab !== event.target.value) {
            this.activeTab = event.target.value;

            this[NavigationMixin.Navigate](
                this.getUpdatedPageReference({
                    c__activeTab: this.activeTab
                }),
                true /* replace parameter is set to true so that browser 
                navigates to new page without pushing it into page history, 
                so user does not have click browser's back button multiple times. */
            );
        }
    }

    getUpdatedPageReference(stateChanges) {
        return Object.assign({}, this.currentPageReference, {
            state: Object.assign(
                {},
                this.currentPageReference.state,
                stateChanges
            )
        });
    }
}
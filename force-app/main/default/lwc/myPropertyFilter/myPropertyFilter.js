/* eslint-disable no-console */
import { LightningElement,track,wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class PropertyFilter extends LightningElement {   
    @track noOfBathRoom;
    @track noOfBedRoom
    @track maxBudget;
    @track minBudget;
    @track location;
    get locationOptions() {
        return [
            { label: 'ALL', value: 'ALL' },
            { label: 'Banglore', value: 'Banglore' },
            { label: 'Mumbai', value: 'Mumbai' },
            { label: 'Hyderbad', value: 'Hyderbad' },
            { label: 'Pune', value: 'Pune' },
            { label: 'Nashik', value: 'Nashik' },
            { label: 'Bhubaneswar', value: 'Bhubaneswar' },
        ];
    }
    get noOfBedRoomOptions() {
        return [
            { label: 'ALL', value: 'ALL' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },            
        ];
    }
    get noOfBathRoomOptions() {
        return [
            { label: 'ALL', value: 'ALL' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },            
        ];
    }
    @wire(CurrentPageReference) pageRef;
    handleLocationChange(event){
        this.location = event.target.value;
        console.log('handleLocationChange this.location'+this.location);
        fireEvent(this.pageRef, "handelLocFilterChange", this.location);
    }
    handleBedroomChange(event){
        this.noOfBedRoom = event.target.value;
        console.log('handleLocationChange this.noOfBedRoom'+this.noOfBedRoom);
        fireEvent(this.pageRef, "handelBedRoomFilterChange", this.noOfBedRoom);
    }
    handlebathroomChange(event){
        this.noOfBathRoom = event.target.value;
        console.log('handleLocationChange this.noOfBathRoom'+this.noOfBathRoom);
        fireEvent(this.pageRef, "handelBathRoomFilterChange", this.noOfBathRoom);
    }
    handelbudgetchange(event){
        this.maxBudget = event.target.value;
        console.log('handleLocationChange this.maxBudget'+this.maxBudget);
        fireEvent(this.pageRef, "handelBudgetFilterChange", this.maxBudget);
    }
    
}
import { LightningElement, api } from 'lwc';

export default class PropertyPricing extends LightningElement {
    @api property;
    @api propertyFound;
}
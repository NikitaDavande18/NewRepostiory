import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { loadStyle } from 'lightning/platformResourceLoader';
import KSH_Assets from "@salesforce/resourceUrl/KSH_Assets";
export default class Ksh_header extends NavigationMixin(LightningElement)
 {
    renderedCallback()
    {
        if (this.filesLoaded) return;
        Promise.all([ 
            loadStyle(this, KSH_Assets + "/styles/ksh_Theme.css"),
            loadStyle(this, KSH_Assets + "/styles/font-awesome.min.css")
        ]).then(() => {
            this.filesLoaded = true;
        }).catch((error) => {
            console.log("error", error);
        });
    }
}
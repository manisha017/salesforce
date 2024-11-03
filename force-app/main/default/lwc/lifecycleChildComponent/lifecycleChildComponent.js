import { LightningElement } from 'lwc';

export default class LifecycleChildComponent extends LightningElement {
    componentName = 'lifecycleChildComponent';

    constructor(){
        super();
        console.log('The child component has been created');
    }
    connectedCallback(){
        console.log('The child component has connected to the DOM');
        // console.log('The component\'s name is ' + this.componentName);
    }
    renderedCallback(){
            console.log('The child component has rendered through rendercallback');
            // console.log('The component\'s name is ' + this.componentName);
    }

     disconnectedCallback(){
        alert('The child component has disconnected from the DOM through disconnected callBack');
        // console.log('The component\'s name is ' + this.componentName);
    } 
}


//lightning-button in parent component and write a onclick function 
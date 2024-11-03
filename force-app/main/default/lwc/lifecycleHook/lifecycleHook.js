import { LightningElement } from 'lwc';

export default class LifecycleHook extends LightningElement {


    // set up a custom property on the component
     // This will allow us to have state in the component
     // That we can then log to the console everytime
     // the component re-renders
    componentName = 'lifecycleHook';

    
    constructor(){
        super();
        console.log('The parent component has been created');
       // console.log('The component\'s name is ' + this.componentName);
       //componentName = 'lifecycle Hook updated';
    }

    renderedCallback(){
        console.log('The parent component has rendered through rendercallback');
       // console.log('The component\'s name is ' + this.componentName);
       //manipulate DOM here
   }
   

    connectedCallback(){
        console.log('The parent component has connected to the DOM');
        // console.log('The component\'s name is ' + this.componentName);
        
        //this.loadData();

    }

   /* loadData(){

    }

    render(){
        console.log('The component has rendered');
    }

     disconnectedCallback(){
        console.log('The component has disconnected from the DOM');
        // console.log('The component\'s name is ' + this.componentName);

    }

    errorCallback(error, stack){
         console.log('The component has an error');
        // console.log('The component\'s name is ' + this.componentName);
    }
    */
}
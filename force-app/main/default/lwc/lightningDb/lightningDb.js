import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class LightningDb extends LightningElement {
    dt;
    columns =[
        {
            label: 'Name',
            fieldName: 'name'
            
        },
        {
            label: 'Website',
            fieldName: 'website'
            
        },
        {
            label: 'Phone',
            fieldName: 'phone'
            
        }
    ]
    
    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            console.log('Accounts:', data);
            // Process the data
            this.dt = data;

        } else if (error) {
            console.error('Error:', error);
            // Handle the error
        }
    }

}
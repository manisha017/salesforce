import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import CompletedDateTime from '@salesforce/schema/Task.CompletedDateTime';

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
            this.fetchAccounts();//data


            //logic which needs data from fetchAccounts method
            //here  ...system will get crash
            //

        } else if (error) {
            console.error('Error:', error);
            // Handle the error
        }
    }

   fetchData(){
        getAccounts().then(result => {
            this.dt = result;
        }).catch(error => {
            this.error = error;
        });


    } //5mins
 
    

    

}




thread 1
thread 2
thread 3



t1---executing------needs some data-----5mins
t2-----will start meanwhile

t1 will resume--complete
t2 will s



synchronous
t1--------5mins to get data--complete
t2 will wait for 5 mins
t1--C
t2---10minst





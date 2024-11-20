import { LightningElement } from 'lwc';

export default class LightningDatatable extends LightningElement {
    columns =[
        {
            label: 'Name',
            fieldName: 'name'
            
        },
        {
            label: 'Account Type',
            fieldName: 'accountType'
            
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

    data = [
        {
            Id: 1,
            name: 'Avengers',
            accountType: 'Proprietorship',
            website: 'avengers.test',
            phone: '+5511999999999'
        },
        {
            Id: 2,
            name: '<NAME>',
            accountType: 'Proprietorship',
            website: 'batman.test',
            phone: '+5511988888888'
        },
        {
            Id: 3,
            name: '<NAME>',
            accountType: 'Proprietorship',
            website: 'superman.test',
            phone: '+5511977777777'
        }
    ]

}
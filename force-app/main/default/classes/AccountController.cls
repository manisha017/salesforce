public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
            List<Account> lst = [SELECT Id, Name, Website, Phone FROM Account limit 10];
            System.debug(lst);
            return lst;     
    }
}
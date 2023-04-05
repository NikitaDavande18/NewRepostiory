public without sharing class SfWiki_Handler {

    @AuraEnabled
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Phone, Website, Industry, AnnualRevenue FROM Account LIMIT 10];
    }

    @AuraEnabled
    public static List<Contact> getContacts() {
        return [SELECT Id, Name, Title, Phone, Email, Department FROM Contact LIMIT 10];
    }

}
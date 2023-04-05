/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 12-01-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class PropertyDetais {
 
 

    @AuraEnabled(cacheable=true)
    public static Property1__c getDetails(string propId){
        Property1__c prop = [SELECT Id,
                                   
                                    Available_From__c,
                                    Carpet_area_sqft__c,
                                    Coverd_area_sqft__c,
                                    Electricity_Status__c,
                                    Facing__c,
                                    Floor__c,
                                    For_Bachellor__c,
                                    For_Family__c,
                                    Furnishning_Available__c,
                                    Furnished_Type__c,
                                    Geo_Map__c,
                                    Landmark__c,
                                    Location__c,
                                    country__c,
                                    street__c,
                                    Area__c,
                                    Maintainance_Charge__c,
                                    No_of_Balcony__c,
                                    No_Of_Bath_Room__c,
                                    No_Of_Bed_Room__c,
                                    Property_Description__c,
                                    Property_Main_Image__c,
                                    Property_Owner__c,  
                                    Property_Video_URL__c,                                  
                                    Name,
                                    Rent__c,
                                    Security_Deposit__c,
                                    Status__c,
                                    Verified__c,
                                    Water_Availability__c
                            FROM Property1__c
                            WHERE Id=:propId
                            LIMIT 50
                            ];
        return prop;
    }
}
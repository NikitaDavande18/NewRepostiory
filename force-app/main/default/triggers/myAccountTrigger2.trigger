trigger myAccountTrigger2 on Account( before insert) {
    if (Trigger.isInsert)
     {
    
        for (Account a : Trigger.new)  //return the new of the list of record
        {
            System.assertEquals('MyTutorialRack', a.Name); //
            System.assertEquals('12345678', a.AccountNumber);
            System.assertEquals(100, a.numberofemployees);
            System.assertEquals(200, a.annualrevenue);
            
        }


  }
}
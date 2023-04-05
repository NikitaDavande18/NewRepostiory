trigger myAccountTrigger on Account (before Delete) //name of the triiger 
{
   if(Trigger.isBefore)// it will returns true if the trigger is fired before record is set
   {
      if(Trigger.isDelete) // it will returns true if the trigger is fired due to a delete operation 
      {
          //in a before delete trigger,the  trigger access the records that will 
          //deleted with the trigger .old.list
          for(Account a:Trigger.old) 
          {
              if(a.Name!='okToDelete')
              {
                  a.addError('You can not delete this account Record');
              }
          }
      }
   }   

}
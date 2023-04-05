public class Example
{
  public string name;
  public string getName()
  {
    return name;
  } 

 public void setName(string name)
 {
   this.name = name;
 }
 public pageReference show()
 {
 name = 'This is my name' + name;
 return null;
 }  
}
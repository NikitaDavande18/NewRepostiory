public class Student
{  
 integer id;//field or data member or instance variable  
 String name;  
  
 public static void main(String args)
 {  
  Student s1=new Student();//creating an object of Student  
  System.debug('this is id' +s1.id);//accessing member through reference variable  
  System.debug('this is name' +s1.name);  
 }  
}
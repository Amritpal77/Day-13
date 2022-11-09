/*
Inheritence:-----To create a new class from the existing class is called inheritence.
1. Single level inheritence:-- Only one base class and only one derived class is called
single level inheritence.
2. Multilevel:-- More than subderived class is called multilevel inheritence
3. Multiple:-- More than one base class only one derived class is called multiple inheritence.
=> Note:- Multiple inheritence doesnot support in Nodejs
4. Hierarchical inheritence:-- Root tree structure 
5. Hybrid:--- Combination of one or more inheritence  is called hybrid inheritence.

*/ // First example of Inheritence**********

class a 
{
    hello()
    {
        console.log("I am a hello function")
    }
}
class b extends a{    // b is a child(derived) class inherit from a using extends keyword
    by()
    {
        console.log("I am in by function")
    }
}
const obj=new b()
obj.by()
obj.hello()

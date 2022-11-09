/*
Inheritence:-----
1. Single level inheritence:--
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
        console.log("I am in hello function")
    }
}
class b extends a{    // b is a child(derived) class inherit from a using extends keyword
    by()
    {
        this.hello()
        console.log("I am in by function")
    }
}
const obj=new b()
obj.by()
obj.hello()

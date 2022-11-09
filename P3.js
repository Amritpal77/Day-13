const input=require('readline-sync')


class a 
{
    r=null
    m=null
    k=null
    hello()
    {
        console.log("Enter your fist value")
        this.r=input.questionInt()
        console.log("Enter 2nd value")
        this.m=input.questionInt()
        
    }
}
class b extends a{    // b is a child(derived) class inherit from a using extends keyword
    by()
    {
        this.k=this.r+this.m
        console.log("Sum is: "+this.k)
        
    }
}
const obj=new b()
obj.hello()
obj.by()

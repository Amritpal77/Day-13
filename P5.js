const input=require('readline-sync')

class ab
{
    a=null
    b=null
    c=null
    hi()
    {
        console.log("Enter 1st number:")
        this.a=input.questionInt()
              
    }
}
class bc extends  ab
{

    hi2()
    {
        console.log("Enter 2nd number:")
        this.b=input.questionInt()
    }
    
}
class cd extends bc
{
    by()
    {
        this.c=this.a-this.b
        console.log("Substraction is:",this.c)
    }
}

const no=new cd()
no.hi()
no.hi2()
no.by()
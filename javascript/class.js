//class:--->
class sectionb{
    constructor(name,rollno,percentage)// constructore helps to create the object
    {
        console.log("constructor called")///to check how many time our constructure called
        this.name=name;
        this.rollno=rollno;
        this.percentage=percentage;
    }
     about(){
        return(`${this.name} and rollno${this.rollno}is ${this.percentage}`)
     }

}
const student1=new sectionb("neha",6224,90)//new keyword  is important beacause without new keyword you cannot call constructore
const student2=new sectionb("priti",6224,30)
console.log(student1)
console.log(student1.name)

//2nd examplwe
class book{
    constructor(name,author)
    {
        this.name=name;
        this.author=author;
    }
    disp()
    {
        return(`${this.name} author is ${this.author}`)
    }
    best()
    {
        return(`${this.name} is good book for kids`)
    }
    better()
    {
        return(`${this.name}is good book for adults`)
    }
}
class notes extends book{
    constructor(name,author,pageno){
        super(name,author)
        this.pageno=pageno
    }
    get(){
        return(`total pages are ${this.pageno} `)
    }

}
const search=new notes("The jungle book","neha",290)
console.log(search)
console.log(search.disp())
console.log(search.best())
console.log(search.get())
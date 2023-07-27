//  getter:-->
// setter:-->
class detail{
    constructor(fname,lastname){
        this.fname=fname;
        this.lastname=lastname
    }
    get show(){ // using this  you can access properties directoly
        return (`${this.fname} ${this.lastname}`)
    }
    // setName(fname,lastname){//hmm properties ki value change kr shkte hai
    //     this.fname=fname;
    //     this.lastname=lastname
    //}
    set  name(name){
        const[fname,lastname]=fname.split("")
        this.fname=fname;
        this.lastname=lastname
    }
}
const show1=new detail("neha","negi")
// console.log(show1.fname)
// console.log(show1.lastname)
// show1.setName("nitin","negi") 
// console.log(show1.fname)
// console.log(show1.lastname)
 show1.fname=("nitin","singh")
 console.log(show1)
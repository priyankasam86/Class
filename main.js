function studentInfo(){

    // Public Property

    this.studFullName=undefined;
    this.studAge=undefined;

    //Private Property
    let studFullName=undefined;

    //Public Method

    this.onDisplay=function(){

        console.log(`${this.studFullName} ${this.studAge}`);
    }

    
    //Private Method

    let privateMethod1=function(){
        console.log("Private Method 1");
    }

    this.displayStudFullName=function(strStudFullName){

            studFullName=strStudFullName;
            console.log(studFullName);

            privateMethod1();
    }
}

let studentInfoObj=new studentInfo();
studentInfoObj.studFullName="Priyanka Shinde";
studentInfoObj.studAge="33";

studentInfoObj.onDisplay();

studentInfoObj.displayStudFullName("Ashwini Parmar");

studentInfoObj.studFullName="Sameer Shinde";
studentInfoObj.studAge="35";

studentInfoObj.onDisplay();

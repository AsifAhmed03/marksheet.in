
    document.getElementById("inner_marksheet").style.display="none";
function submit(){
    var a = document.getElementById("canName").value;
    // var b = parseInt(document.getElementById("rollNo").value);
    var c = parseInt(document.getElementById("english").value);
    var d = parseInt(document.getElementById("hindi").value);
    var e = parseInt(document.getElementById("account").value);
    var f = parseInt(document.getElementById("static").value);
    var g = parseInt(document.getElementById("maths").value);
    var h = parseInt(document.getElementById("computer").value);
    var i = document.getElementById("fatherName").value;
    var j = document.getElementById("motherName").value;


    document.getElementById("cName").innerHTML= a;
    // document.getElementById("roll").innerHTML= b;
    document.getElementById("english1").innerHTML=c;
    document.getElementById("hindi1").innerHTML=d;
    document.getElementById("account1").innerHTML=e;
    document.getElementById("static1").innerHTML=f;
    document.getElementById("maths1").innerHTML=g;
    document.getElementById("computer1").innerHTML=h;
    document.getElementById("fName").innerHTML=i;
    document.getElementById("mName").innerHTML=j;



    document.getElementById("total_eng").innerHTML=c;
    document.getElementById("total_hindi").innerHTML=d;
    document.getElementById("total_accounts").innerHTML=(e+42);
    document.getElementById("total_statics").innerHTML=(f+36);
    document.getElementById("total_maths").innerHTML=g;
    document.getElementById("total_computer").innerHTML=(h+42);

let total_english =parseInt(document.getElementById("total_eng").innerHTML);
let total_hindi =parseInt(document.getElementById("total_hindi").innerHTML);
let total_accounts =parseInt(document.getElementById("total_accounts").innerHTML);
let total_statics =parseInt(document.getElementById("total_statics").innerHTML);
let total_maths =parseInt(document.getElementById("total_maths").innerHTML);
let total_computer =parseInt(document.getElementById("total_computer").innerHTML);
let total_marks = (total_english + total_hindi + total_accounts + total_statics + total_maths + total_computer);
document.getElementById("total_aggriget_marks").innerHTML=total_marks;
document.getElementById("total_obtain_marks").innerHTML=750;
let per =total_marks/750*100;
document.getElementById("percentage").innerHTML=parseFloat(per).toFixed(2)+" %";


let rollNo = Math.floor(Math.random() * (9999999-999999))+999999;
document.getElementById("roll").innerHTML=rollNo;


//to print marks in red colour & underline
if(total_english < 36){
    document.getElementById("total_eng").style.color="red";
    document.getElementById("total_eng").style.textDecoration="underline";
}
else{
    document.getElementById("total_eng").style.color="black";
    document.getElementById("total_eng").style.textDecoration="";
}
if(total_hindi < 36){
    document.getElementById("total_hindi").style.color="red";
    document.getElementById("total_hindi").style.textDecoration="underline";
}
else{
    document.getElementById("total_hindi").style.color="black";
    document.getElementById("total_hindi").style.textDecoration="";
}
if(total_accounts<54){
    document.getElementById("total_accounts").style.color="red";
    document.getElementById("total_accounts").style.textDecoration="underline";
}
else{
    document.getElementById("total_accounts").style.color="black";
    document.getElementById("total_accounts").style.textDecoration="";
}
if(total_statics<54){
    document.getElementById("total_statics").style.color="red";
    document.getElementById("total_statics").style.textDecoration="underline";
}
else{
    document.getElementById("total_statics").style.color="black";
    document.getElementById("total_statics").style.textDecoration="";
}
if(total_maths<36){
    document.getElementById("total_maths").style.color="red";
    document.getElementById("total_maths").style.textDecoration="underline";
}
else{
    document.getElementById("total_maths").style.color="black";
    document.getElementById("total_maths").style.textDecoration="";
}
if(total_computer<54){
    document.getElementById("total_computer").style.color="red";
    document.getElementById("total_computer").style.textDecoration="underline";
}
else{
    document.getElementById("total_computer").style.color="black";
    document.getElementById("total_computer").style.textDecoration="";
}

//CODE BY ANOTHER PERSON

// let another=[total_eng,total_hindi,total_accounts,total_statics,total_maths,total_computer];
// console.log(another);
// let fail2="";
// for (let i in another){
//     if(another[i]<40){
//         fail2+=another[i]+",";
//     }
// }
// let fail3=fail2.split(",").filter(word=>word !="");
// console.log(fail3);
// if(fail3.length){
//     document.getElementById("remarks").innerHTML="Fail";
// }



//To Print Remarks in Marksheet
if(total_english>=33 && total_english<36){
    document.getElementById("remarks").innerHTML="Passed By Grace in English";
    document.getElementById("remarks").style.color="red";
}
else if(total_english<33){
    document.getElementById("remarks").innerHTML="Supplimentry in English";
    document.getElementById("remarks").style.color="red";
}
if(total_hindi>=33 && total_hindi<36){
    document.getElementById("remarks").innerHTML="Passed By Grace in Hindi";
    document.getElementById("remarks").style.color="red";
}
else if(total_hindi<33){
    document.getElementById("remarks").innerHTML="Supplimentry in Hindi";
    document.getElementById("remarks").style.color="red";
}
if(total_accounts>=51 && total_accounts<54){
    document.getElementById("remarks").innerHTML="Passed By Grace in Accounts";
    document.getElementById("remarks").style.color="red";
}
else if(total_accounts<51){
    document.getElementById("remarks").innerHTML="Supplimentry in Accounts";
    document.getElementById("remarks").style.color="red";
}
if(total_statics>=51 && total_statics<54){
    document.getElementById("remarks").innerHTML="Passed By Grace in Statics";
    document.getElementById("remarks").style.color="red";
}
else if(total_statics<51){
    document.getElementById("remarks").innerHTML="Supplimentry in Statics";
    document.getElementById("remarks").style.color="red";
}
if(total_maths>=33 && total_maths<36){
    document.getElementById("remarks").innerHTML="Passed By Grace in Maths";
    document.getElementById("remarks").style.color="red";
}
else if(total_maths<33){
    document.getElementById("remarks").innerHTML="Supplimentry in Maths";
    document.getElementById("remarks").style.color="red";
}
if(total_computer>=51 && total_computer<54){
    document.getElementById("remarks").innerHTML="Passed By Grace in Computer";
    document.getElementById("remarks").style.color="red";
}
else if(total_computer<51){
    document.getElementById("remarks").innerHTML="Supplimentry in Computer";
    document.getElementById("remarks").style.color="red";
}



// let subject =[total_english,total_hindi,total_accounts,total_statics,total_maths,total_computer];
// for (i=0; i<=5; i++){
//     if(subject[i]<36){
//         let abc = subject[i].indexOf();
//         console.log(abc);
//     }
// }




//To Print Division in Marksheet
if (per <=36){
    document.getElementById("result").innerHTML="FAIL";
    document.getElementById("division").innerHTML="FAIL"
    document.getElementById("division").style.fontWeight="900";
}
else if (per >36 && per < 48){
    document.getElementById("result").innerHTML="PASS";
    document.getElementById("division").innerHTML="IIIrd"
    document.getElementById("division").style.fontWeight="900";
}
else if (per >=48 && per < 60){
    document.getElementById("result").innerHTML="PASS";
    document.getElementById("division").innerHTML="IInd"
    document.getElementById("division").style.fontWeight="900";
}
else if (per >=60){
    document.getElementById("result").innerHTML="PASS";
    document.getElementById("division").innerHTML="Ist"
    document.getElementById("division").style.fontWeight="900";
}
else{
    document.getElementById("division").innerHTML="Result Not Found";
    document.getElementById("division").style.fontWeight="900";
}



// let fail = [total_english,total_hindi,total_maths];
// let fail_fif =[total_accounts,total_computer,total_statics];
// let first_sup = "";
// let second_sup ="";
// for(let fail_fifty in fail_fif){
//     // console.log(fail_fif[fail_fifty]);
//     if(fail_fif[fail_fifty]<50){
//         // console.log(fail_fif[fail_fifty]);
//         first_sup += fail_fif[fail_fifty]+",";   
//     }  
// }


// for(let fail_hun in fail){
//     console.log(fail[fail_hun]);
//     if(fail[fail_hun]<33){
//         console.log(fail[fail_hun]);
//         second_sup+=fail[fail_hun]+",";
//     }
// }
// let fail_in_hun = second_sup.split(",");
// let fail_in_fifty = first_sup.split(",");
// if(fail_in_hun.length>1 && fail_in_fifty.length>1){
//     console.log("fail");
// }else if(fail_in_hun.length>1||fail_in_fifty>1){
//     console.log("fail");
// }







document.getElementById("inner_marksheet").style.display="block";
document.getElementById("inner_marksheet").value;
}

//To Print the Marksheet
function Marksheet(){
    let body=document.getElementById("body").innerHTML;
    let data=document.getElementById("marksheet").innerHTML;
    document.getElementById("body").innerHTML=data;
    window.print();

}

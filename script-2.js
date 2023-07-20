// active search with icon 
let search = document.getElementById("search");
let inputa = document.getElementById("input");

search.onclick = function () {
inputa.style.opacity = "2" ;
inputa.style.transform = "translatY (20px)"
inputa.style.transition="0.7s"

}

// ******************************************************************************************************************************************************
let up = document.getElementById("body")

let content1 = document.createElement("div")
let att1 = content1.setAttribute("id" ,"content2")
let att2 = content1.setAttribute("class" ,"more")

// h1
let content2 = document.createElement("h1")
let att5 = content2.setAttribute("id" ,"hjs")
content1.appendChild(content2)

let att3 = document.createTextNode("more is :")
content2.appendChild(att3)

// p
let content3 = document.createElement("p")
let att6 = content3.setAttribute("id" ,"pjs")

content1.appendChild(content3)
let att4 = document.createTextNode(" https://social-store-26.creator-spring.com" )
content3.appendChild(att4)

let about = document.getElementById("about")
// out put
console.log(content1)


// lern more :

let more1 = document.getElementById("more1")


let come1 = document.getElementById("content2")


more1.onclick = function () {

about.appendChild(content1)
come1.style.transition ="0.7s"
come1.style.display ="none"
let come2 = document.getElementById("content2")
come2.style.transition="0.7s"
confirm(" ok shank you")


}

// ************************************************************************************************************************

let link = document.getElementById("link");
link.onclick = function() {
    // myNewWindow 
    window.open("", "width=100%,height=100%");
}


// ***********************************************************************************************************************

// let bus = document.getElementById("menu");

// window.onscroll = function () {
//   if (window.scrollY = 500) {
//     bus.style.transform="scale(1)";
//     console.log(bus)
//   }
 
// };

// ******************************************************************************************************************************

let product1 = document.getElementById("active1") ;
product1.onclick = function() {
    if(product1.style.color == "red") {
    product1.style.color="white"
    product1.style.transition="0.8s"

    } else{
    product1.style.color="red"
    product1.style.transition="0.8s"
    }
}

let product2 = document.getElementById("active2") ;
product2.onclick = function() {
    if( product2.style.color == "red") {
        product2.style.color="white"
        product2.style.transition="0.s"
    } else{
        product2.style.color="red"
        product2.style.transition="0.3s"
    }
    
    }
let product3 = document.getElementById("active3") ;
product3.onclick = function() {
    if( product3.style.color == "red") {
        product3.style.color="white"
        product3.style.transition="0.s"
        } else{
        product3.style.color="red"
        product3.style.transition="0.3s"
        }

    }
    

    // the stars :

    let strs1 = document.getElementById("pro-btn1") ;
    let strs2 = document.getElementById("pro-btn2") ;
    let strs3 = document.getElementById("pro-btn3") ;
    let strs4 = document.getElementById("pro-btn4") ;
    let strs5 = document.getElementById("pro-btn5") ;
    let strs6 = document.getElementById("pro-btn6") ;
    let strs7 = document.getElementById("pro-btn7") ;
    let strs8 = document.getElementById("pro-btn8") ;
    let strs9 = document.getElementById("pro-btn9") ;
    let strs10 = document.getElementById("pro-btn10") ;
    let strs11 = document.getElementById("pro-btn11") ;
    let strs12 = document.getElementById("pro-btn12") ;
    let strs13 = document.getElementById("pro-btn13") ;
    let strs14 = document.getElementById("pro-btn14") ;
    let strs15 = document.getElementById("pro-btn15") ;

    function get1() {
        if(      strs1.style.color=="yellow" ){
            strs1.style.color="white"
        }else{
        strs1.style.color="yellow"
        }
    }

    
    function get2() {
        if(  strs2.style.color=="yellow" ){
            strs2.style.color="white"
        }else{
        strs2.style.color="yellow"
        }
    }


    function get3() {
        if(  strs3.style.color=="yellow" ){
            strs3.style.color="white"
        }else{
        strs3.style.color="yellow"
        }
    }


    function get4() {
        if(  strs4.style.color=="yellow" ){
            strs4.style.color="white"
        }else{
        strs4.style.color="yellow"
        }
    }


    function get5() {
        if(  strs5.style.color=="yellow" ){
            strs5.style.color="white"
        }else{
        strs5.style.color="yellow"
        }
    }
    function get6() {
        if(  strs6.style.color=="yellow" ){
            strs6.style.color="white"
        }else{
        strs6.style.color="yellow"
        }
    }


    function get7() {
        if( strs7.style.color=="yellow" ){
            strs7.style.color="white"
        }else{
        strs7.style.color="yellow"
        }
    }


    function get8() {
        if(  strs8.style.color=="yellow" ){
            strs8.style.color="white"
        }else{
        strs8.style.color="yellow"
        }
    }


    function get9() {
        if( strs9.style.color=="yellow"){
            strs9.style.color="white"
        }else{
            strs9.style.color="yellow"
        }
    }

        function get10() {
        if( strs10.style.color=="yellow" ){
            strs10.style.color="white"
        }else{
            strs10.style.color="yellow"
        }
    }
            
    function get11(){
        if( strs11.style.color=="yellow" ){
                strs11.style.color="white"
        }else{
                strs11.style.color="yellow"
        }
    }


    function get12() {
        if( strs12.style.color=="yellow" ){
            strs12.style.color="white"
        }else{
            strs12.style.color="yellow"
        }
    }

    function get13() {
        if( strs13.style.color=="yellow" ){
            strs13.style.color="white"
        }else{
            strs13.style.color="yellow"
        }
    }

    function get14() {
        if( strs14.style.color=="yellow" ){
            strs14.style.color="white"
        }else{
            strs14.style.color="yellow"
        }
    }

    function get15() {
        if( strs15.style.color=="yellow" ){
            strs15.style.color="white"
        }else{
            strs15.style.color="yellow"
        }
    }


    // ********************************************************************************************


    
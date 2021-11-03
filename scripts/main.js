/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].setAttribute("id","divs"+String(i));
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//addition of the input boxes for the user inputted array sizes
var content1=document.getElementById("container1");
var content2=document.getElementById("container2");
var div =[];
var user_input=document.getElementById("user_input");
user_input.addEventListener("click",generate_columns);
inp_as.addEventListener("change",generate_columns);
function generate_columns()
{ 
    content1.innerHTML="";
    content2.innerHTML="";
    var i =0;
    for(;i<inp_as.value/2;i++)
    {
        div[i]=document.createElement("input");
        div[i].setAttribute("id",String(i));
        div[i].setAttribute("type","number");
        div[i].style=" width: 25%; height: 7%;";
        div[i].addEventListener("change",function(){
            document.getElementById("divs"+String(this.id)).style.height = String(this.value+"%");
        });
        content1.appendChild(div[i]);
    }
    for(;i<inp_as.value;i++){
        div[i]=document.createElement("input");
        div[i].setAttribute("id",String(i));
        div[i].setAttribute("type","number");
        div[i].style=" width: 25%; height: 7%;";
        div[i].addEventListener("change",function(){
            document.getElementById("divs"+String(this.id)).style.height = String(this.value+"%");
        });
        content2.appendChild(div[i]);
    }
    
}

//end addition

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
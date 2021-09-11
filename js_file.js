//window.alert("start");
var store=0;
function myfunction1()
{
    console.log("1");
    let a=1;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function myfunction2()
{
    console.log("2");
    let a=2;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function myfunction3()
{
    console.log("2");
    let a=3;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function myfunction4()
{
    console.log("2");
    let a=4;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function myfunction5()
{
    console.log("2");
    let a=5;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function myfunction6()
{
    console.log("2");
    let a=6;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function myfunction7()
{
    console.log("2");
    let a=7;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function myfunction8()
{
    console.log("2");
    let a=8;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function myfunction9()
{
    console.log("2");
    let a=9;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function myfunction0()
{
    console.log("2");
    let a=0;
    forms.answer.value += a;
    store = forms.answer.value
    console.log(store.length);
    if(store.length>=11)
    {
        window.alert("wrong number")
        forms.answer.value="";
    }
}

function callfunction()
{
   
    if(forms.answer.value=="")
    {
      window.alert("Enter Phone number")
      
    }
    else
    {
        forms.answer.value="Calling...";
        if(store.length<10)
        {
            console.log("wrong");
            function myFunction() 
        {
         setTimeout(function()
         { 
             
             forms.answer.value="Wrong No. ";
             function myFunction1() 
             {
               setTimeout(function()
               { forms.answer.value=""; }, 2000);}
                myFunction1()

             }, 3000);
         
        }
        myFunction()
        }

        else
        {
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = false;
            document.getElementById("btn1").value="X";
            //document.getElementById("btn1").hidden = true;
            console.log("hello world");
            forms.answer.value="Calling...";
            function myFunction() 
            {
             setTimeout(function()
             { 
               //forms.answer.value="Wrong No. ";
               console.log("testing");
                // time start
                   function hello() 
                   {
                    var seconds = 00;  
                    var tens = 00;  
                    var appendTens;
                    var appendSeconds;  
                    var Interval ;
                    buttonStart = function()
                    {
                     clearInterval(Interval);
                     Interval = setInterval(startTimer, 10);
              
                    }
                   buttonStart()
           
          
                    function startTimer () 
                    {
                     tens++; 
              
                     if(tens <= 9)
                     {
                      appendTens = "0" + tens;      
               
              
                     }
                     if (tens > 9)
                     {
                      appendTens = tens;
               
                     } 
                     if (tens > 99) 
                     {
                      console.log("seconds");
                      seconds++;
                      appendSeconds = "0" + seconds;
               
               
                      tens = 0;
                      appendTens= "0" + 0;
        
                     }  
                     if (seconds > 9)
                     {
                      appendSeconds = seconds;
                     }
        
                     if(seconds<=09)
                     { 
                       forms.answer.value="0"+seconds+":"+tens;
               
                     }
                     else
                     {
           
        
                       forms.answer.value=""+seconds+":"+tens;
                     }
              
                
                    }
            
                   }
                   hello();
            // time end

             }, 3000);
              
             }
            myFunction()    
        }
       
    }
    
}

function cancelfunct()
{

    if(forms.answer.value=="")
    {
      window.alert("Enter Phone number")
      document.getElementById("btn2").disabled = true;
      document.getElementById("btn2").value="X";
      
    }
    else
    {
        window.alert("your call has cancelled");
        forms.answer.value="";
        location.reload();

    }
    
    
}



//answer.value = eval(answer.value)
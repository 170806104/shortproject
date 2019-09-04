 function  nidaye()
 {
 var str=document.getElementsByName("answer");
 var obj_legth=str.length;
 var checkVal='';
 for(var i=0;i<obj_legth;i++)
 
 {
	if(str[i].checked==true) {
		checkVal+=str[i].value+',';
	}
	}
 
	
		   if(checkVal=='B,C,') 
		        
			   document.getElementById("mydiv").style.display='block';
		        
			else{
// 				 
document.getElementById("mydiv2").style.display='block';
			}
           
	
   
   } 
 		function btn2(){
     document.getElementById("mydiv").style.display='none';
 }
 	
  function queding()
 {
 var str=document.getElementsByName("answer");
 var obj_legth=str.length;
 var checkVal='';
 for(var i=0;i<obj_legth;i++)
 
 {
 	if(str[i].checked==true) {
 		checkVal+=str[i].value+',';
 	}
 	}
 
 	 
 		   if(checkVal=='B,C,D,') 
 		        document.getElementById("mydiv").style.display='block';
				 
 			else{
//  				 
document.getElementById("mydiv2").style.display='block';
 			}
           
 	
   
   } 

   				
   function btn4()
   		        {
   		    document.getElementById("mydiv2").style.display='none';
   		        }  
   
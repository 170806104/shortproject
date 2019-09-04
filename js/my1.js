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
	if(checkVal=='')
	{ alert("请先选择复选框～！"); 
	  return;}
	else{ 
		   if(checkVal=='B,C,') 
		       // {alert("你的答案是："+checkVal+"恭喜你，回答正确！");
			   document.getElementById("mydiv").style.display='block';
		       // return;}
			else{
// 				alert("你的答案是："+checkVal+"回答错误！");
// 				 return;
document.getElementById("mydiv2").style.display='block';
			}
           
	
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
 	if(checkVal=='')
 	{ alert("小朋友，你没有选答案哦～！"); 
 	  return;}
 	else{ 
 		   if(checkVal=='B,C,D,') 
 		        document.getElementById("mydiv").style.display='block';
				// {alert("你的答案是："+checkVal+"恭喜你，回答正确！");
 		       // return;}
 			else{
//  				alert("你的答案是："+checkVal+"回答错误！");
//  				 return;
document.getElementById("mydiv2").style.display='block';
 			}
           
 	
  } 
   } 

   				
   function btn4()
   		        {
   		    document.getElementById("mydiv2").style.display='none';
   		        }  
   
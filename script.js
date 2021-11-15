function check()
{
    var score=0;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    
    if(q1=="A"){score++;}
    if(q2=="C"){score++;}
    if(q3=="A"){score++;}
    if(q4=="A"){score++}
    if(q5=="B"){score++}
    
    var percent= (score/5)*100;
  
 document.getElementById('result').innerHTML= "Your Score is : " + parseInt(percent)+"%";
}
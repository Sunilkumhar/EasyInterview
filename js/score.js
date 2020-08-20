var storedComments = JSON.parse(localStorage.getItem("comments"));
var storedgrades = JSON.parse(localStorage.getItem("grade"));

console.log(storedComments[0]);
var average=0;
const result = document.getElementById("result");
for(let i=0;i<storedComments.length;i++){
  var row = result.insertRow(-1);
  var question = row.insertCell(0);
  var grade = row.insertCell(1);
  var comm = row.insertCell(2);

  question.innerHTML = `Q.${i+1}`;
  grade.innerHTML = `${storedgrades[i]}/5`;
  comm.innerHTML = storedComments[i];
  average = average+storedgrades[i];
  // console.log(average);

}
average = Math.round(average/5);
var finalcomment;

if(average === 1){
  finalcomment = "Can do better";
}
if(average === 2){
  finalcomment = "Good..";
}
if(average === 3){
  finalcomment = "Very Good";
}
if(average === 4){
  finalcomment = "Excellent";
}
if(average === 5){
  finalcomment = "Briellent";
}


document.getElementById('final').innerHTML = `
<table id="finalresult">
  <tr>
    <th style=" text-decoration: underline;width: 12%;font-size: 35px;">Final Result</th>
    <th style="width: 14%;font-size: 25px;">${average}/5</th>
    <th style="width: 16%;font-size: 25px;">${finalcomment}</th>
  </tr>
</table>
`
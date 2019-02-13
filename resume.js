(function () {
  function loadJson(file,callback) {
  var rawFile=new  XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true) ;
  rawFile.onreadystatechange=function(){
    if(rawFile.readyState === 4 & rawFile.status == "200"){
    callback(rawFile.responseText);
  }

  }
  rawFile.send(null);
}
loadJson("javascript/resume.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  leftData(data.profile);
  education(data.EDUCATION);
skills(data.SKILLS);

});
var left=document.querySelector(".leftdiv");
var right=document.querySelector(".rightdiv");
function leftData(leftdetails){
  var image=document.createElement("img");

  image .src="images/download.png";
image.alt="profile image";
left.appendChild(image);

var name=document.createElement("h2");
name.textContent=leftdetails.name;
left.appendChild(name);

var collegename=document.createElement("h3");
collegename.textContent=leftdetails.collegename;
left.appendChild(collegename);

var number=document.createElement("h5");
number.textContent=leftdetails.number;
left.appendChild(number);

var mail=document.createElement("h5");
mail.textContent=leftdetails.mail;
left.appendChild(mail);

//rightDiv Data
var careerobject=document.createElement("h1");
careerobject.textContent="careerobject";
right.appendChild(careerobject);
right.appendChild(document.createElement("hr"));
let p=document.createElement("p");
p.textContent=leftdetails.carreer;
right.appendChild(p);
}
//rightDiv creation

 //create educational leftdetails
 function education(edu){
   var Education=document.createElement("h1");
   Education.textContent="Education information";
   right.appendChild(Education);
  right.appendChild(document.createElement("hr"));
 for(i in edu)
{
  let h3=document.createElement("h3");
  h3.textContent=edu[i].degree;
  right.appendChild(h3);
  let ul=document.createElement("ul");
  right.appendChild(ul);

  //create list's li1,li2&li3
  let li1=document.createElement("li");
  li1.textContent=edu[i].college;
  ul.appendChild(li1);


let li2=document.createElement("li");
li2.textContent="Branch:"+edu[i].branch;
ul.appendChild(li2);

let li3=document.createElement("li");
li3.textContent="marks:"+edu[i].marks;
ul.appendChild(li3);

let li4=document.createElement("li");
li4.textContent="enddate:"+edu[i].enddate;
ul.appendChild(li4);

}




}
function skills(skill){
    var sk=document.createElement("h1");
    sk.textContent="skills";
    right.appendChild(sk);

    var p=document.createElement("p1");
    p.textContent=skill.os;
    right.appendChild(p);


var p1=document.createElement("p");
p1.textContent=skill.ps;
right.appendChild(p1);

}

})()

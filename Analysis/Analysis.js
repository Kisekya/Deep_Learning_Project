/*
  Author : Marina Boudin Coralie Muller
*/

function modify(file){
  console.log(file);
  let n=1;
  for (let k =0;k<file.length;k++){
    if (file[k]==="\n"){
      console.log(n);
      n++;
    }
  }
}

function get_the_file(file_name){
  var file = new FileReader();
  var my_file;
  var display_area=document.getElementById("div-visualisation");
  file.onload = function(e) {
    display_area.innerText = file.result;
    my_file=file.result;
    modify(my_file);
  }
  file.readAsText(file_name);
}

function move_onglet(volet){
  Analysis.forEach(function(obj){
    var division = document.getElementById(obj.division);
    if (select_one===obj.name){
      var onglet = document.getElementById(select_one);
      onglet.style.color="#2c001eff";
      onglet.style.backgroundColor="#ffffff";
      division.style.display="block";
    }
    else{
      var onglet = document.getElementById(obj.name);
      onglet.style.color="#ffffff";
      onglet.style.backgroundColor="#2c001eff";
      division.style.display="none";
    }
  });
}

function upload_the_file(){
  var the_input=document.getElementById("my_data");
  var files=the_input.files;
  var no = document.getElementById("data_upload_state");
  if (files.length===0){
    no.style.display="block";
  }
  else{
    no.style.display="none";
    var data_path=files[0].name;
    console.log(files[0]);
    get_the_file(files[0]);
  }
}

function setupListener(){
  Analysis.forEach(function(obj){
    var onglet = document.getElementById(obj.name);
    onglet.addEventListener("click",function(){
      select_one=this.id;
      move_onglet()
    });
  });
  var upload=document.getElementById("upload");
  console.log(upload);
  upload.addEventListener("click",function(){
    upload_the_file();
  });
}

let Analysis =[
  {
    name :"Data",
    division:"div-Data"
  },
  {
    name:"Model",
    division :"div-Model"
  },
  {
    name:"Hyperparameters",
    division :"div-Hyperparameters"
  },
  {
    name:"Training" ,
    division : "div-Training"
  },
  {
    name:"Results" ,
    division : "div-Results"
  }
]
var select_one="Data";

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//   if (this.readyState==4 && this.status==200){
//     var xmlDoc = this.responseXML;
//     document.getElementById("div-visualisation").innerHTML=xmlDoc.getElementsByTagNAME("root")[0].childNodes[0].nodeValue;
//   }
// }
// xhttp.open("GET","https://github.com/Kisekya/Deep_Learning_Project/blob/master/Analysis/file.xml?fbclid=IwAR0GAQJkVxz4u4jrvIEBADaj3NEURlBNH5uO7d5zllvEC9vCCAwxM5x79a8",true);
// xhttp.send();

window.addEventListener("load",setupListener);

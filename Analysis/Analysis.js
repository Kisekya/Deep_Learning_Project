/*
  Author : Marina Boudin Coralie Muller
*/


function visualisation(datas){
  var display_area=document.getElementById("div-visualisation");
  var table = document.createElement("table");
  var title_band=document.createElement("tr");
  for (let title =0;title<datas[0].length+1;title++){
    if (title===0){
      var title_cell=document.createElement("td");
      title_band.appendChild(title_cell);
    }
    else{
      var title_cell=document.createElement("th");
      var text=document.createTextNode("Column "+title.toString());
      title_cell.appendChild(text);
      title_band.appendChild(title_cell);
    }
  }
  table.appendChild(title_band);
  for(let ligne = 0; ligne<datas.length;ligne++){
    var tr = document.createElement("tr");
    for (let colonne=0;colonne<datas[ligne].length+1;colonne++){
      if (colonne===0){
        var td = document.createElement("th");
        var lign=ligne+1;
        var text = document.createTextNode("Lign "+lign.toString());
        td.appendChild(text);
        tr.appendChild(td);
      }
      else {
        var td = document.createElement("td");
        var text = document.createTextNode(datas[ligne][colonne-1]);
        td.appendChild(text);
        tr.appendChild(td);
      }
    }
    table.appendChild(tr);
  }
  display_area.appendChild(table);
}

function modify(file){
  let n=1;
  var file_split=file.split("\n");
  if (file_split[file_split.length-1]===""){
    file_split.pop();
  }
  var tableau=[];
  for (let data=0;data<file_split.length;data++){
    var ligne=file_split[data].split(",");
    var ligne_map=ligne.map(x => parseFloat(x));
    tableau.push(ligne_map);
    console.log(ligne_map);
  }
  visualisation(tableau);
  // for (let k =0;k<file.length;k++){
  //   if (file[k]==="\n"){
  //     console.log(n);
  //     n++;
  //   }
  // }
}

function get_the_file(file_name){
  var file = new FileReader();
  var my_file;
  file.onload = function(e) {
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

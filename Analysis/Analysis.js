/*
  Author : Marina Boudin Coralie Muller
*/

function move_onglet(volet){
  Analysis.forEach(function(obj){
    var division = document.getElementById(obj.division);
    if (select_one===obj.name){
      var onglet = document.getElementById(select_one);
      onglet.style.color="#cc2900";
      onglet.style.backgroundColor="#ffffff";
      division.style.display="block";
    }
    else{
      var onglet = document.getElementById(obj.name);
      onglet.style.color="#ffffff";
      onglet.style.backgroundColor="#cc2900";
      division.style.display="none";
    }
  });
}

function setupListener(){
  Analysis.forEach(function(obj){
     var onglet = document.getElementById(obj.name);
     onglet.addEventListener("click",function(){
       select_one=this.id;
       move_onglet()
     });
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

window.addEventListener("load",setupListener);

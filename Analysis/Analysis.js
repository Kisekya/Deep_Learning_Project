/*
  Author : Marina Boudin Coralie Muller
*/

function write(){
  var table_html=document.getElementById("table-visualisation");
  var copy = table_html.cloneNode(true);
  copy.removeChild(copy.childNodes[0]);
  for (let child=0; child<copy.childNodes.length;child++){
    let children=copy.childNodes[child];
    children.removeChild(children.childNodes[0]);
  }
	var temp = XLSX.utils.table_to_book(copy, {sheet:"Sheet JS"});
  return XLSX.writeFile(temp,('test.' + 'csv'));
}

function visualisation(datas){
  var display_area=document.getElementById("div-visualisation");
  if (display_area!=null){
    display_area.innerHTML="";
  }
  else{
    display_area=document.createElement("div");
    display_area.id="div-visualisation";
    var div = document.getElementById("div-Data");
    div.appendChild(display_area);
  }
  var table = document.createElement("table");
  table.id="table-visualisation";
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
        td.classList.add("td_value");
        var text = document.createTextNode(datas[ligne][colonne-1]);
        td.appendChild(text);
        tr.appendChild(td);
      }
    }
    table.appendChild(tr);
  }
  display_area.appendChild(table);
  var download = document.getElementById("download");
  download.style.display="block";
}

function csv_to_list(file){
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
  }
  visualisation(tableau);
}

function to_csv(workbook) {
    var result = [];
    workbook.SheetNames.forEach(function(sheetName) {
        var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
        if(csv.length > 0){
            result.push(csv);
        }
    });
    return result.join("\n");
}

function get_the_file(file_name){
  var file = new FileReader();
  var ods = file_name.name.search(".ods");
  var xlsx = file_name.name.search(".xlsx");
  var csv = file_name.name.search(".csv");
  if (ods!==-1 || xlsx!==-1){
    file.onload = function(e) {
      var data = file.result;
      var arr = String.fromCharCode.apply(null, new Uint8Array(data));
      var temp = XLSX.read(btoa(arr), {type: 'base64'});
      var output = "";
      output=to_csv(temp);
      csv_to_list(output);
    };
    file.readAsArrayBuffer(file_name);
  }
  else if (csv!==-1) {
    file.onload = function(e) {
      my_file=file.result;
      csv_to_list(my_file);
    }
    file.readAsText(file_name);
  }
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
  upload.addEventListener("click",upload_the_file);
  var download = document.getElementById("download");
  download.addEventListener("click",write);
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

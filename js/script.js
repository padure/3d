var e = document.getElementById("service");

function onChange() {

  const service =(tex)=>{
    document.getElementById("select").style.display = "none";
    const para = document.createElement("ul");
    const node = document.createTextNode(tex);
    para.appendChild(node);
    const element = document.getElementById("add");
    element.appendChild(para);
  }
  var text = e.options[e.selectedIndex].text;
  switch(text){
    case "Diagnostic auto":
      service(`Diagnosticul transmisiei automate
      Diagnosticarea sincronizării
      Diagnosticul transmisiei manuale
      Diagnosticare motor diesel`)
    break;
  }
  switch(text){
    case "Transmisie":
      service(`nlocuirea transmisiei automate
      Înlocuirea transmisiei manuale
      Înlocuirea lagărului de eliberare
      Înlocuirea cilindrului principal al ambreiajului`)
    break;
  }
}
e.onchange = onChange;
onChange();
const formulario = document.getElementById("form1")

function porcentaje(n1,n2,n3,n4,n5) {
    let resultado = (n1+n2+n3+n4+n5) / 5
    console.log(resultado);
    if (resultado){
      document.getElementById("texto").innerHTML = `Tu porcentaje es ${resultado}`
    }
}

form1.addEventListener('submit',(event)=>{
    event.preventDefault();
    const Matter1 = parseFloat(document.getElementById('Matter1').value);
    const Matter2 = parseFloat(document.getElementById('Matter2').value);
    const Matter3 = parseFloat(document.getElementById('Matter3').value);
    const Matter4 = parseFloat(document.getElementById('Matter4').value);
    const Matter5 = parseFloat(document.getElementById('Matter5').value);

})
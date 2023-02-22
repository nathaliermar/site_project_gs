const cep = document.querySelector("#cep")

const showData = (result)=>{
  for(const campo in result){
      if(document.querySelector("#"+campo)){
          document.querySelector('#'+campo).value = result[campo]

      }
  }
}

submit.onclick = function(){
  let search = cep.value.replace("-","")
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
  .then(response =>{ response.json()
    .then( data => showData(data)) 
  })
  .catch(e => showData('ERROR'+ e,message))

}
calculate.onclick = function(){
    if(document.getElementById("uf").value == 'PA'){
      window.alert("Freight is $22");
    } else if(document.getElementById("uf").value == 'AM'){
      window.alert("Freight is $20");
    } else if(document.getElementById("uf").value == 'AC'){
      window.alert("Freight is $18");
    } else if(document.getElementById("uf").value == 'RO'){
      window.alert("Freight is $18");
    } else if(document.getElementById("uf").value == 'RR'){
      window.alert("Freight is $16");
    } else if(document.getElementById("uf").value == 'TO'){
      window.alert("Freight is $16");
    } else if(document.getElementById("uf").value == 'AP'){
      window.alert("Freight is $16");
    } else if(document.getElementById("uf").value == 'MA'){
      window.alert("Freight is $16");
    } else if(document.getElementById("uf").value == 'PI'){
      window.alert("Freight is $16");
    } else if(document.getElementById("uf").value == 'CE'){
      window.alert("Freight is $14");
    } else if(document.getElementById("uf").value == 'RN'){
      window.alert("Freight is $14");
    } else if(document.getElementById("uf").value == 'PB'){
      window.alert("Freight is $14");
    } else if(document.getElementById("uf").value == 'PE'){
      window.alert("Freight is $14");
    } else if(document.getElementById("uf").value == 'AL'){
      window.alert("Freight is $12");
    } else if(document.getElementById("uf").value == 'SE'){
      window.alert("Freight is $12");
    } else if(document.getElementById("uf").value == 'BA'){
      window.alert("Freight is $12");
    } else if(document.getElementById("uf").value == 'MT'){
      window.alert("Freight is $10");
    } else if(document.getElementById("uf").value == 'GO'){
      window.alert("Freight is $10");
    } else if(document.getElementById("uf").value == 'DF'){
      window.alert("Freight is $10");
    } else if(document.getElementById("uf").value == 'MS'){
      window.alert("Freight is $10");
    } else if(document.getElementById("uf").value == 'MG'){
      window.alert("Shipping is free");
    } else if(document.getElementById("uf").value == 'ES'){
      window.alert("Shipping is free");
    } else if(document.getElementById("uf").value == 'RJ'){
      window.alert("Shipping is free");
    } else if(document.getElementById("uf").value == 'SP'){
      window.alert("Shipping is free");
    } else if(document.getElementById("uf").value == 'PR'){
      window.alert("Shipping is free");
    } else if(document.getElementById("uf").value == 'SC'){
      window.alert("Shipping is free");
    } else if(document.getElementById("uf").value == 'RS'){
      window.alert("Shipping is free");
    }
}
limpar.onclick=function(){
  document.getElementById("cep").value = null;
  document.getElementById("logradouro").value = null;
  document.getElementById("uf").value = null;
  document.getElementById("ddd").value = null;

}

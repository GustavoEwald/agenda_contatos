const form = document.getElementById("form-contato");
const contatos = [];
linhas = '';

form.addEventListener('submit', function(e){
  e.preventDefault();
  getNames();
  // console.log(contatos);
  
  // console.log('linhas event: '+linhas);
  let tab_dados = document.querySelector("#dados-tabela");
  tab_dados.innerHTML = escreveLinha();
})

function getNames(){
  const nome = document.getElementById('nome-contato');
  const tel = document.getElementById('tel-contato');
  
  for(let i = 0; i<contatos.length; i++){
    if(!contatos[i].name.localeCompare(nome.value)){
      if(window.confirm("Este contato já existe!\nAtualizar o seu número?")){
        contatos.pop(contatos[i]);
      }else{
        nome.value = '';
        tel.value = '';
        return;
      }
    }
  }
  
  let contato = {name: nome.value, telefone: tel.value};
  contatos.push(contato);

  contatos.sort((a, b) => a.name.localeCompare(b.name))
  nome.value = '';
  tel.value = '';
}

function escreveLinha(){
  linhas = '';
  for(let i=0; i<contatos.length; i++){
    linhas += "<tr>";
    linhas += `<td>${contatos[i].name.toUpperCase()}</td>`;
    linhas += `<td>${contatos[i].telefone}</td>`;
    linhas += "</tr>";
  //  console.log('flag '+linhas);
  }
  // console.log('linhas retorno: '+linhas)
  return linhas;
}

function nomeRepetiu(){
  for(let i = 0; i<contatos.length; i++){
    if(contatos.name == nome.value){
      alert("Este contato já existe!\nPara atualizá-lo com outro telefone, clique em atualizar\nCaso contrário, em cancelar")
      contatos.pop(contatos.indexOf(contato = {name: nome.value, telefone: tel.value}));
    }
  }
}

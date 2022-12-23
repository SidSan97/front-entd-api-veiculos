function enviaDados()
{
  const ul = document.getElementById('tabela');
  const list = document.createDocumentFragment();
  const url = 'http://localhost/api-veiculos/index.php?q=pesquisarTudo';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

      authors.map(function(author) {
        let li = document.createElement('li');
        let name = document.createElement('h2');
        let email = document.createElement('span');

        name.innerHTML = `${author.modelo}`;
        email.innerHTML = `${author.cor}`;

        li.appendChild(name);
        li.appendChild(email);
        list.appendChild(li);
      });
    })
    .catch(function(error) {
      console.log(error);
    });

  ul.appendChild(list);
}




































/*var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var cliente = JSON.parse(this.responseText); 

        document.getElementById("tabela").innerHTML = `
        <table>
            <tr>
                <th>Modelo</th>
                <th>Cor</th>
                <th>Ano</th>
                <th>Placa</th>
            </tr>
            ${pegarDados()}
        </table>
        `;

        function pegarDados() { 
            let caarroArray = cliente.dados;
            let textTable = "";
            for(let i in caarroArray) {
                    textTable += `
                        <tr>  
                            <td>${caarroArray[i]['modelo']}</td>
                            <td>${caarroArray[i]['cor']}</td> 
                            <td>${caarroArray[i]['ano']}</td> 
                            <td>${caarroArray[i]['placa']}</td> 
                        </tr>
               `                           
            }        
             
            return textTable;
        }
      }
    };
    
    xmlhttp.open("GET", "http://localhost/api-veiculos/testes/teste.php", true);
    xmlhttp.send();*/
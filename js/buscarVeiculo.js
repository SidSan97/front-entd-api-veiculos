function fazRequisicao(body)
{
    const json = JSON.stringify(body)
    let request = new XMLHttpRequest()
    request.open("GET", "http://localhost/api-veiculos/index.php?q=buscarVeiculo&v=" + json, true)
    request.send(json)
    console.log("Json: ", json)

    request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var cliente = JSON.parse(this.responseText); 

        document.getElementById("tabela").innerHTML = `
        <table class="table">
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
      else {
        document.getElementById("tabela").innerHTML = '<p color="red">Busca sem resultados</p>';
      }
    }
}

function enviaDadosVeiculo()
{
    event.preventDefault();
    let valor     = document.getElementById("valor").value;
    let parametro = document.getElementById("parametro").value;

    body = {
        "valor" : valor,
        "parametro" : parametro
    }

    fazRequisicao(body);
}

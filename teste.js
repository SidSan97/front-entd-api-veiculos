var xmlhttp = new XMLHttpRequest();
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
    
    xmlhttp.open("GET", "http://localhost/api-veiculos/App/view/carrosBusca.json", true);
    xmlhttp.send();
    //document.location.reload(false);
function fazPost(body)
{
    const json = JSON.stringify(body)
    let request = new XMLHttpRequest()
    request.open("GET", "http://localhost/api-veiculos/index.php?q=buscarVeiculo&v=" + json, true)
    request.send(json)
    console.log("Json: ", json)
}

function buscaVeiculo()
{
    event.preventDefault();
    let valor     = document.getElementById("valor").value;
    let parametro = document.getElementById("parametro").value;

    body = {
        "valor" : valor,
        "parametro" : parametro
    }

    fazPost(body);
}
var vtipo
var Tipo = document.getElementById("Tipo")

Tipo.addEventListener("change", function () {

    var Tipo = document.getElementById("Tipo")
    const Vt = Tipo.options[Tipo.selectedIndex].value;
    vtipo = Vt

    fetch(`https://parallelum.com.br/fipe/api/v1/${vtipo}/marcas`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            var Marca = document.getElementById("Marca")
            Marca.innerHTML = ""
            Marca.innerHTML = "<option  selected hidden>Selecione uma Marca...</option>"

            for (var i = 0; i < json.length; i++) {
                Marca.innerHTML += `<option value="${json[i].codigo}">${json[i].nome}</option>`

            }

        })

})
var vmarca
Marca.addEventListener("change", function () {
    var Marca = document.getElementById("Marca")
    const Vmar = Marca.options[Marca.selectedIndex].value
    vmarca = Vmar

    fetch(`https://parallelum.com.br/fipe/api/v1/${vtipo}/marcas/${vmarca}/modelos`)
        .then(res => res.json())
        .then(js2 => {
            var Modelo = document.getElementById("Modelo")
            console.log(js2)
            Modelo.innerHTML = ""
            Modelo.innerHTML = "<option  selected hidden>Selecione uma Modelo...</option>"
            for (var i = 0; i < js2.modelos.length; i++) {
                Modelo.innerHTML += `<option value="${js2.modelos[i].codigo}">${js2.modelos[i].nome}</option>`
            }
        })
})

var vmodelo
Modelo.addEventListener("change", function () {
    var Modelo = document.getElementById("Modelo")
    const Vm = Modelo.options[Modelo.selectedIndex].value;
    vmodelo = Vm

    fetch(`https://parallelum.com.br/fipe/api/v1/${vtipo}/marcas/${vmarca}/modelos/${vmodelo}/anos`)
        .then(res => res.json())
        .then(js3 => {
            var Ano = document.getElementById("Ano")
            console.log(js3)
            Ano.innerHTML = " "
            Ano.innerHTML = "<option  selected hidden>Selecione uma Ano...</option>"
            for (var i = 0; i < js3.length; i++) {
                Ano.innerHTML += `<option value="${js3[i].codigo}">${js3[i].nome}</option>`
            }
        })
})



var vano
Ano.addEventListener("change", function () {
    var Ano = document.getElementById("Ano")
    const Va = Ano.options[Ano.selectedIndex].value;
    vano = Va

    fetch(`https://parallelum.com.br/fipe/api/v1/${vtipo}/marcas/${vmarca}/modelos/${vmodelo}/anos/${vano}`)
        .then(res => res.json())
        .then(js4 => {


            const ano_exibe = js4.AnoModelo
            const codigoFipe = js4.CodigoFipe
            const Marca_vec = js4.Marca
            const modelo_vec = js4.Modelo
            const Valor_vec = js4.Valor
            const combustivel = js4.Combustivel
            const divresultado = document.getElementById("res")

            divresultado.innerHTML = "<p>RESULTADO:</p>"
            divresultado.innerHTML += `<p>
            <br>Modelo: ${modelo_vec}<br> FIPE: ${codigoFipe}<br> Ano: ${ano_exibe}<br>Combustivel: ${combustivel}<br>Marca: ${Marca_vec}<br>R$: ${Valor_vec}
        </p>`
        })

})


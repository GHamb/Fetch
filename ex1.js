
for (var i = 0; i < 5; i++) {
    var cont = 0

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(json => {
            var ing = '<p>'
            for (let i = 1; i < 21; i++) {

                var ingrediente = json.meals[0]['strIngredient' + i]
                if (ingrediente) {
                    ing += ingrediente + " <br>"
                }
            }
            ing += '</p>'
            var medida = '<p>'
            for (let i = 1; i < 21; i++) {

                var med = json.meals[0]['strMeasure' + i]
                if (med) {
                    medida += med + '<br>'
                }
            }
            medida += '</p>'
            document.querySelector('main').innerHTML += `<div id='${cont++}'><p id='titulo'>${json.meals[0].strMeal}</p> <br><img src="${json.meals[0].strMealThumb}" alt=""><br><br> <p>${json.meals[0].strInstructions}<p> <br><br><br>Ingredientes:${ing} <br> Quantidades:${medida}</div>`
        })

    cont++

}


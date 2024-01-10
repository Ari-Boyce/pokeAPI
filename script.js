var log;
fetch("https://pokeapi.co/api/v2/pokemon?limit=1292").then(function(res){
    return res.json();
})
.then(function(data){
    //console.log(data);
    console.log(data.results);
    log = data.results
    log.forEach(function(current){
        console.log(current.name)
        //make an li element <li>
        let li = document.createElement("li");


        // make an element <a> </a>

        let a = document.createElement("a");

        // make innertext pokemon name

        a.innerText = current.name;

        //Put text inside the li EX: <li> Poke </li>

        // make thing = href

        a.href = "Poke.html?name=" + current.name;

        //put a inside li

        li.append(a)


        //Put li inside the ol EX: <ol> <li> Poke </li> </ol>

        document.querySelector("ol").append(li)
    })
    // data.results.forEach(function(pokemon){
    //     console.log(pokemon.name)
    //     let h3 = document.createElement("h3")
    //     h3.innerText = pokemon.name
    //     let anchor = document.createElement("a")
    //     anchor.append(h3)
    //     anchor.href = pokemon.url
    //     document.body.append(anchor)
    // })
    //log = data
    //console.log(log)
})


// eli is cheecks and smells.... DANG. Someone tell eli to stop talking
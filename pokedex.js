const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./assets/who.gif");
            document.getElementById("pokeNombre").innerHTML = "SIN DATO";
            clean();
            cleanInput();
        }
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        let pokeName = data.name;
        document.getElementById("pokeNombre").innerHTML = ("Nombre: " + pokeName);
        let pokeId = data.id;
        document.getElementById("pokeId").innerHTML = ("No° " + pokeId);
        let hp = data.stats[0].base_stat;
        document.getElementById("hp").innerHTML = ("HP: " + hp);
        let atk = data.stats[1].base_stat;
        document.getElementById("atk").innerHTML = ("ATK: " + atk);
        let def = data.stats[2].base_stat;
        document.getElementById("def").innerHTML = ("DEF: " + def);
        let sAtk = data.stats[3].base_stat;
        document.getElementById("sAtk").innerHTML = ("SATK: " + sAtk);
        let sDef = data.stats[4].base_stat;
        document.getElementById("sDef").innerHTML = ("SDEF: " + sDef);
        let spd = data.stats[5].base_stat;
        document.getElementById("spd").innerHTML = ("SPD: " + spd);
        
        let pokeTypes = data.types.map(typ => typ.type.name);
        document.getElementById("pokeTipos").innerHTML = ("Tipo(s): " + pokeTypes);
        let pokeMoves = data.moves.map(move => move.move.name);
        document.getElementById("pokeMoves").innerHTML = ("Movimientos: " + pokeMoves);
        let pokeAbilities = data.abilities.map(ability => ability.ability.name);
        document.getElementById("pokeAbilities").innerHTML = ("Habilidades: " + pokeAbilities);
        //pokeTipo(tipos);
        //console.log(tipos);
        subTitle();
    });
}


//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const subTitle = () => {
    const show = document.getElementById("statsTitle");
    show.innerHTML="Estadística";
}

const clean = () =>{
    const clean = document.getElementById("pokeId");
    clean.innerHTML="";
    const clean1 = document.getElementById("pokeNombre");
    clean1.innerHTML="";
    const clean2 = document.getElementById("hp");
    clean2.innerHTML="";
    const clean3 = document.getElementById("atk");
    clean3.innerHTML="";
    const clean4 = document.getElementById("def");
    clean4.innerHTML="";
    const clean5 = document.getElementById("sAtk");
    clean5.innerHTML="";
    const clean6 = document.getElementById("sDef");
    clean6.innerHTML="";
    const clean7 = document.getElementById("spd");
    clean7.innerHTML="";
    const clean8 = document.getElementById("pokeTipos");
    clean8.innerHTML="";
    const clean9 = document.getElementById("pokeAbilities");
    clean9.innerHTML="";
    const clean10 = document.getElementById("pokeMoves");
    clean10.innerHTML="";
    const show = document.getElementById("statsTitle");
    show.innerHTML="";
}

const cleanInput = () => {
    document.getElementById("pokeName").value="";
}
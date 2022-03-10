function adicionarFilme(filme){
    catalogo.push(filme)
}

function buscarFilme(codigo){
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === codigo) {
            return catalogo[i]
        }
    }
}

function alterarStatusEmCartaz1(codigo){
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === codigo) {
            if(catalogo[i].emCartaz === true){
                catalogo[i].emCartaz = false
            }
            else {
                catalogo[i].emCartaz = true
            }
        }
    }
}

function alterarStatusEmCartaz2(codigo){
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === codigo) {
            catalogo[i].emCartaz = !catalogo[i].emCartaz
        }
    }
}

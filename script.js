function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector('#profile img')

    // substituir a imagem
    if(html.classList.contains('light')){
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto camiseta preta com símbolo da Nike branco, celular com capa branca, fundo com 2 cores, metade pra esquerda branca e metade pra direita cinza escuro")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
    }
}
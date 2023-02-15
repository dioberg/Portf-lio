
function trocaModo(){
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar imagem 
  const imagem = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light 
    imagem.setAttribute("src", "./img/avatar-light.jpg")

  } else {
    // se tiver sem light mode, manter a imagem normal
    imagem.setAttribute("src", "./img/Avatar.png")
  }
}
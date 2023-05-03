import { Router } from "./router.js"

const body = document.querySelector('body')
const universe = document.querySelector('#uni')
const home = document.querySelector('#homeBack')
const exploracao = document.querySelector('#exploracao')
const buttonLink = document.querySelector('#teste')
const router = new Router()

router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/exploracao', "/pages/exploracao.html")


router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()



universe.addEventListener('click', function () {
  body.classList.add('backUniverse')
  body.classList.remove('backHome')
  body.classList.remove('backExploracao')
  exploracao.classList.remove('exploracao-style-click')
  universe.classList.add('universe-style-click')
  home.classList.remove('home-style-click')
})


home.addEventListener('click', function () {
  body.classList.add('backHome')
  body.classList.remove('backUniverse')
  body.classList.remove('backExploracao')
  exploracao.classList.remove('exploracao-style-click')
  universe.classList.remove('universe-style-click')
  home.classList.add('home-style-click')
})

exploracao.addEventListener('click', function () {
  body.classList.remove('backHome')
  body.classList.remove('backUniverse')
  body.classList.add('backExploracao')
  exploracao.classList.add('exploracao-style-click')
  universe.classList.remove('universe-style-click')
  home.classList.remove('home-style-click')
})

buttonLink.addEventListener('click', function () {
  body.classList.remove('backHome')
  body.classList.add('backUniverse')
})

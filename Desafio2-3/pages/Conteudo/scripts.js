const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cursos = document.querySelectorAll('.curso');

for (let curso of cursos) {
    curso.addEventListener("click", function(){
        const pagerocket = curso.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pagerocket}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.classList.remove('full')
    modal.classList.remove('full')
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    modalOverlay.classList.add('full')
    modal.classList.add('full')
})
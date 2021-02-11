let count = 0
let gallery = document.querySelector('.gallery')

function frente() {
    switch(count) {
        case 1:
            gallery.classList.remove('gallery5')
            gallery.classList.add('gallery1')
            break
        case 2:
            gallery.classList.remove('gallery1')
            gallery.classList.add('gallery2')
            break
        case 3:
            gallery.classList.remove('gallery2')
            gallery.classList.add('gallery3')
            break
        case 4:
            gallery.classList.remove('gallery3')
            gallery.classList.add('gallery4')
            break
        case 5:
            gallery.classList.remove('gallery4')
            gallery.classList.add('gallery5')
            break
        default:
            count = 0
    }
    count++
}

function voltar() {
    switch(count) {
        case 1:
            gallery.classList.remove('gallery1')
            gallery.classList.add('gallery5')
            break
        case 2:
            gallery.classList.remove('gallery2')
            gallery.classList.add('gallery1')
            break
        case 3:
            gallery.classList.remove('gallery3')
            gallery.classList.add('gallery2')
            break
        case 4:
            gallery.classList.remove('gallery4')
            gallery.classList.add('gallery3')
            break
        case 5:
            gallery.classList.remove('gallery5')
            gallery.classList.add('gallery4')
            break
        default:
            count = 6
    }
    count--
}
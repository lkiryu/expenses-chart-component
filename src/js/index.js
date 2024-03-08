const bars = document.querySelectorAll('.bar')

bars.forEach(function (bar) {
    bar.addEventListener('mouseover', function(){
        bar.previousElementSibling.classList.remove('none')
    })
    
    bar.addEventListener('mouseout', function(){
        bar.previousElementSibling.classList.add('none')
    })
})
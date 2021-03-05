console.log('It works')

$(document).ready(function () {
    $('.submit-btn').click(function (event){
        event.preventDefault()
        console.log('Clicked button')
    })
})
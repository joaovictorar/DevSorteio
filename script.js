function generateNumber(){

    const min = Math.ceil(document.querySelector('.input-1').value)
    const max = Math.floor(document.querySelector('.input-2').value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert(result)

}


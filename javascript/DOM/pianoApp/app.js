const key =document.querySelectorAll('.key')



function Playkey(keynum){
    //document.querySelector('audio').src = obj.url
    document.querySelector(`audio[data-key="${keynum}"]`).play()
}


key.forEach(key=>{

    key.addEventListener('click',()=>{
        var datakey = key.getAttribute('data-key');
            Playkey(datakey)
        console.log(datakey)
        
    
    })
})

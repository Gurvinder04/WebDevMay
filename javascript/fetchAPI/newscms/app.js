// 75f36160adc54de7a9c698db134b00fd //
var api_key ='75f36160adc54de7a9c698db134b00fd';
var baseURL ='https://newsapi.org/v2'
var RsultsElement = document.querySelector('.results')
var ModalTitle = document.querySelector('.modal-title')
var NewsImg = document.querySelector('.news-img')

/*fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=en&apikey=${api_key}`)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    data.articles.forEach(news => {
        console.log(news)
        //console.log(news.title)
    });
})*/

async function getAllNews(){
    let res = await fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=en&apikey=${api_key}`)
    return res.json()
}

/*function getAllNews2(){
    return new Promise((reolve,reject)=>{
        fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=en&apikey=${api_key}`)
        .then(res=>res.json())
        .then(data=>{
            resolve(data)
        })
    })
}*/
function getDetail(news){
    ModalTitle.innerHTML =news.title
    NewsImg.src=news.urlToImage
    //console.log(news)
}
getAllNews()
.then(result=>{
    //console.log(result)
    result.articles.map((news,index)=>{
        //console.log(news.title)
        let NewsLink = `<a href="${news.url}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" target="_blank" data-id="${index}">${news.title}</a><br>`
        //console.log(NewsLink)
        RsultsElement.innerHTML += NewsLink  //if not use + then it show 1 link,probably lastone .to show all use +
    })
        document.querySelectorAll('a').forEach(link=>{
        //console.log(link)
        link.addEventListener('click',(event)=>{
            let id = event.target.getAttribute('data-id');
            let singleNews = result.articles

            getDetail(result.articles[id])
        })
    })
})
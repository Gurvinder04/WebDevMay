
/*const filter = document.getElementById("filter") //input field
const FindBtn = document.getElementById("find") //button
const result = document.getElementById("result") //result field

let posts =[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]

function FindPostById(id){
    if(posts.filter(value=>value.id==id) .length !=0){
    return posts.filter(value=>value.id==id)
}
else{
    return[{title:"no post found"}]
}
}
/*FindBtn.addEventListener('click',(e) => {
    e.preventDefault();
    console.log('helooooo',filter.value)
    let post = FindPostById(filter.value)[0] //using 0 bcoz there is only one element
    console.log(post.title)
    result.innerText = post.title
})*/

/*function clickHandler(){
    console.log('helooooo',filter.value)
    let post = FindPostById(filter.value)[0] //using 0 bcoz there is only one element
    //console.log(post.title)  commented for if
    result.innerText = post.title
}*/

                   //ASSIGNMENT
var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
]




var result
var l= _students.length;
//console.log(l);
// whoPassedExam?
function whoPassedExam(param){
 for(i=0;i<=l; i++){
     if(param.score>=55){
         //result=param.name;
         console.log(param.name + "is passed")
         
     }
     else{
        console.log(param.name + "is not passed")
     }
 }
 //whoPassedExam(_students);
 console.log([_students.course]);
 console.log
 
 

 /*if(param.filter(value=>value.score>=55).length!=0){
    //result=param.filter(param.name);
    //console.log('passed',filter(param.name));
    return param.filter(value=>value.score>=55)  
    
 } 
else{
    return[{title:"no one is passed"}]
}*/
}
//console.log(whoPassedExam(_students))



                      



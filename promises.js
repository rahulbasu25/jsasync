const posts = [{title:'Post one',body:'This is post one'},
               {title:'Post two',body:'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index)=> {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error)
            {
                resolve();
            }
            else{
                reject('Something went wrong');
            }
        },2000);
    });
}

createPost({title:'Post three',body:'This is post three'}).then(getPosts).catch(err=> console.log(err));

let promise1 = Promise.resolve('Hello World');
let promise2 = 10;
let promise3 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve('GoodBye');
    },2000);
});

Promise.all([promise1,promise2,promise3]).then((values) => console.log(values));
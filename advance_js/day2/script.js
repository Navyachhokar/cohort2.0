// Exercise 1

// create a function named afterDelay that that two arguments time and a callback function and prints something after a significant time.
function afterDelay(time, cb){
    setTimeout(() => {
        cb();
    },time)
}

afterDelay(6000, function(){
//    console.log("Callback Executed");
});

//Exercise 2

function instagramSeDataLaao(username,cb){
    setTimeout(() => {
        cb({
            id:1,
            username:username,
        });
    },1000);
}
function metaPeJaaoDataLaao(userId, cb){
    setTimeout(() => {
        cb([userId,"post1","post2","post3"]);
    },3000);
}

instagramSeDataLaao("navya",function(data){
    metaPeJaaoDataLaao(data.id, function(allposts){
        // console.log(allposts);
        
    })
    
})
//create a function named getUser that takes username and a callback function as parameters. After 1 second it should return an object id and username.
//create another function named getUserposts that takes userId and a callback function as parameters. After 2 seconds it should return an array of posts made by the user.
//Use the above two functions to get the posts of a user by the function in the callback.
function getUser(username, cb){
    setTimeout(() => {
        cb({
            id: 1,
            username: username,
        });
    },1000);
}

function getUserPosts(userId, cb){
    setTimeout(() => {
        cb([userId,"xyz","abc","def"]);
    },2000);
}

getUser("Navya", function(data){
    getUserPosts(data.id, function(allposts){
        // console.log(allposts);   
    });
})

// Exercise 3

function loginUser(username,cb){
    console.log("logging in user....");
    
    setTimeout(() => {
        cb({id:1212, username:username});
    },1000);
}
function fetchPermissions(userId, cb){
    console.log("fetching permissions....");
    
    setTimeout(() => {
        cb(["read","write","delete"]);
    },2000);
}

function loadDashboard(permissions, cb){
    console.log("loading dashboard....");
    
    setTimeout(() => {
        cb(permissions);
    },2000);
}

loginUser("navya", function(userdata){
   fetchPermissions(userdata.id, function(permisssions){
    loadDashboard(permisssions, function(){
        // console.log("permissions loaded",permisssions);
    });
   });
});


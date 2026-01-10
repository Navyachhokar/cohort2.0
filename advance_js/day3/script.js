//SCENARIO 1: Build a weather dashboard with error handling that fetches current weather data from any public weather api(such as OpenWeatherMap).
async function getWeather(city){
    try{
        let apikey =`38e85cd35badc22aff5f622252ee7ea3`;
        let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
        let realdata = await raw.json();
        if(!raw.ok){
           throw new Error('city not found');
        }  
        else{
            console.log(realdata.main);
            
        }
    }
    catch(err){
        console.log(err.message);
        
    }
}

// getWeather("pune");

// SCENARIO 2: 

const users = [
    "abc@gmail.com",
    "jcb@gmail.com",
    "xyz@gmail.com",
];

function sendEmail(email){
    return new Promise((resolve,reject) => {
        let time = Math.floor(Math.random()*5);
        setTimeout(() => {
            let probability = Math.floor(Math.random()*10);
            if(probability<=5){
                resolve("email sent.");
            }
            else{
                reject("email not sent.");
            }
        },time*1000);
    });

};

async function sendEmails(userlist){
    let allresponses = userlist.map(function(email){
        return sendEmail(email)
        .then(function(data){
            return data;    
        })
        .catch(function(err){
            return err; 
        });
    });
    let ans = await Promise.all(allresponses);
    ans.forEach(function(status,index){
        console.log(`${index}:${status}`);
    });
}

// sendEmails(users);


//PRACTICE QUESTIONS FOR PROMISES AND ASYNC AWAIT.......


// console.log("start");

setTimeout(() => {
//   console.log("timeout");
}, 0);

Promise.resolve().then(() => {
//   console.log("promise");
});

console.log("end");

Promise.resolve(1)
  .then(num => {
    // console.log(num);
    return num + 1;
  })
  .then(num => {
    // console.log(num);
  });

async function Data(){
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/postsi/1`)
        if(!response.ok){
            throw new Error("Unable to fetch data.");
        }
        let realdata = await response.json();
        console.log(realdata);
    }
    catch(err){
        console.log(err.message);
    }

}

// Data();


async function test() {
  throw "error";
}

test()
//   .then(console.log)
//   .catch(console.log);

async function test() {
  return 5;
}

// test().then(console.log);
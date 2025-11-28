const generateBtn = document.getElementById('generate-btn');
const resultCard = document.getElementById('result-card');
const container = document.querySelector('body');

generateBtn.addEventListener('click', function(){
    const winner =Math.floor(Math.random()*team.length);
    resultCard.innerHTML=`
    <div class="details">
            <h1 style="color:${team[winner].primaryColor}">${team[winner].team}</h1>
            <p style="color: ${team[winner].secondaryColor};">
                <strong>Captain:</strong> ${team[winner].captain}
            </p>
            <p style="color: ${team[winner].secondaryColor};">
                <strong>Trophies Won:</strong> ${team[winner].trophies} 🏆
            </p>
    </div>`;
    container.style.backgroundColor = team[winner].secondaryColor;
    resultCard.style.backgroundColor = team[winner].primaryColor;
    resultCard.style.color = team[winner].secondaryColor;

    resultCard.classList.remove('hidden');
    
})

var team = [
    {
        team:"CSK",
        fullName:"Chennai Super Kings",
        primaryColor: "#FDB913",
        secondaryColor: "#045691",
        trophies:5,
        captain:"MS Dhoni",
        

    },
    {
        team:"MI",
        fullName:"Mumbai Indians",
        primaryColor: "#003F78",
        secondaryColor: "#FFFFFF",
        trophies:5,
        captain:"Hardik Pandya ",
        
    },
    {
        team: "KKR",
        fullName: "Kolkata Knight Riders",
        primaryColor: "#56008F", 
        secondaryColor: "#FDB913", 
        trophies: 3,
        captain: "Shreyas Iyer",
        
    },
    {
        team: "RCB",
        fullName: "Royal Challengers Bengaluru",
        primaryColor: "#000000", 
        secondaryColor: "#B90C2A",
        trophies: 1, 
        captain: "Rajat Patidar",
        
    },
    {
        team: "SRH",
        fullName: "Sunrisers Hyderabad",
        primaryColor: "#FF5700", 
        secondaryColor: "#000000", 
        trophies: 1,
        captain: "Pat Cummins",
        
    },
]


// generateBtn.addEventListener('click', function() {

//     const randomIndex = Math.floor(Math.random() * iplTeams.length);
//     const winnerTeam = iplTeams[randomIndex];

//     resultCard.style.backgroundColor = winnerTeam.primaryColor;
//     resultCard.style.color = winnerTeam.secondaryColor; 

//     resultCard.innerHTML = `
//         <img src="${winnerTeam.logo}" alt="${winnerTeam.fullName} Logo" class="team-logo">
//         <h2 class="team-name">${winnerTeam.team}</h2>
//         <h3 class="full-name">${winnerTeam.fullName}</h3>
//         <div class="details">
//             <p style="color: ${winnerTeam.secondaryColor};">
//                 <strong>Captain:</strong> ${winnerTeam.captain}
//             </p>
//             <p style="color: ${winnerTeam.secondaryColor};">
//                 <strong>Trophies Won:</strong> ${winnerTeam.trophies} 🏆
//             </p>
//         </div>
//     `;

//     resultCard.classList.remove('hidden');
// });


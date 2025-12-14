const users = [
  {
    username: "alex_johnson",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    profession: "Frontend Developer",
    description: "Passionate about building clean, responsive user interfaces using modern web technologies."
  },
  {
    username: "sophia_lee",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Designs intuitive digital experiences with a strong focus on usability and aesthetics."
  },
  {
    username: "rahul_verma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Full Stack Developer",
    description: "Works across frontend and backend to deliver scalable and efficient web applications."
  },
  {
    username: "emily_carter",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Product Manager",
    description: "Bridges the gap between business goals and technical teams to ship impactful products."
  },
  {
    username: "daniel_wong",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    profession: "Data Analyst",
    description: "Transforms raw data into actionable insights using analytics and visualization tools."
  }
];

var sum = '';

users.forEach(function(elem){
    sum += `<div class="card">
            <img src="${elem.image}" alt="unsplash image">
            <h3>${elem.username}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

var main = document.querySelector('main');
main.innerHTML = sum;


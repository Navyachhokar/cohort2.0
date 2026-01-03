const reelsData = [
  {
    username: "shualong_wei",
    likeCount: 2300,
    isLiked: false,
    commentCount: 2300,
    caption: "End of summer ☀️🍉 bc fall is right around the corner",
    video: "./reels/reel1.mp4",
    userProfile: "https://images.unsplash.com/photo-1766693931664-4d5db815f0c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 1600,
    isFollowed: false,
    saveCount: 1000,
    isSaved: true,   
    story: true,
    isMute: true,
  },
  {
    username: "fujifilm",
    likeCount: 14500,
    isLiked: true,
    commentCount: 18000,
    caption: "Wrapped gifts under a decorated Christmas tree 🎄✨",
    video: "./reels/reel2.mp4",
    userProfile: "https://images.unsplash.com/profile-1708755306433-16b9a7e1585b?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    shareCount: 56000,
    isFollowed: true,
    saveCount: 7600,
    isSaved: true,   
    story: false,
  },
  {
    username: "brooke_balentine",
    likeCount: 4000,
    isLiked: false,
    commentCount: 500,
    caption: "Christmas is around the corner & what else can feel better?",
    video: "./reels/video1.mp4",
    userProfile: "https://images.unsplash.com/profile-1759028613204-d0ef302784f2image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    shareCount: 250,
    isFollowed: false,
    saveCount: 100,
    isSaved: true,   
    story: true,
    isMute: true,
  },
  {
    username: "travelwithme",
    likeCount: 98000,
    isLiked: false,
    commentCount:12000,
    caption: "Lost in the mountains ⛰️",
    video: "./reels/reel4.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8fDA%3D",
    shareCount: 500,
    isFollowed: false,
    saveCount: 61000,
    isSaved: true,   
    story: false,
  },
  {
    username: "daily.hub",
    likeCount: 35000,
    isLiked: true,
    commentCount: 46500,
    caption: "My everytime fav recipe",
    video: "./reels/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvfGVufDB8fDB8fHww",
    shareCount: 900,
    isFollowed: true,
    saveCount: 140,
    isSaved: true,   
    story: false,
    isMute: true,
  },
  {
    username: "foodie.diaries",
    likeCount: 15000,
    isLiked: false,
    commentCount:21700,
    caption: "Street food hits different 🌮🔥",
    video: "./reels/reel6.mp4",
    userProfile: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvfGVufDB8fDB8fHww",
    shareCount: 1000000,
    isFollowed: false,
    saveCount: 50000,
    isSaved: true,   
    story: false,
  },
  {
    username: "codingwithsam",
    likeCount: 1000000,
    isLiked: true,
    commentCount: 80000,
    caption: "Frontend dev is all about details 🧠💻",
    video: "./reels/reel7.mp4",
    userProfile: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 30600,
    isFollowed: true,
    saveCount: 5400,
    isSaved: true,   
    story: false,
  },
  {
    username: "nature.clicks",
    likeCount: 13000,
    isLiked: false,
    commentCount: 3300,
    caption: "Morning light through the trees 🌿",
    video: "./reels/reel8.mp4",
    userProfile: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    shareCount: '112.8k',
    isFollowed: false,
    saveCount: '16.7k',
    isSaved: true,    
    story: true,
  },
  {
    username: "minimal.life",
    likeCount: '53M',
    isLiked: false,
    commentCount: '45.7k',
    caption: "Less noise. More clarity.",
    video: "./reels/reel9.mp4",
    userProfile: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    shareCount: '48k',
    isFollowed: false,
    saveCount: '69.8k',
    isSaved: true,    
    story: false,
    isMute: true,
  },
  {
    username: "art.of.motion",
    likeCount: '34.4k',
    isLiked: true,
    commentCount: '51.5k',
    caption: "Movement is a form of expression 🎥",
    video: "./reels/reel10.mp4",
    userProfile: "https://images.unsplash.com/photo-1617281822114-9541b921a880?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0JTIwb2YlMjBtb3Rpb258ZW58MHx8MHx8fDA%3D",
    shareCount: '2M',
    isFollowed: true,
    saveCount: '22.6k',
    isSaved: true,
    story: false,
    isMute: true,
  }
];

var allReels = document.querySelector('.all-reels');

function addData(){
  var sum = '';
  reelsData.forEach(function(reel,idx){  
      sum += `
          <div class="reel">
                      <video class="main-img" src="${reel.video}" ${reel.isMute ? 'muted' : ''} autoplay loop  playsinline></video>
                      
                      <div class="bottom">
                          <div class="user">
                              <div class="image-container ${reel.story ? "story-ring":"" }">
                                  <img src="${reel.userProfile}" alt="unsplash image">
                              </div>
                              <h4>${reel.username}</h4>
                              <button id="${idx}" class="follow">${reel.isFollowed ? "Following": "Follow"}</button>
                          </div>
                          <p>${reel.caption}...<span>see more</span></p>
                          
                      </div>
                      <div class="right">
                          <div id="${idx}" class="mute">
                          ${!reel.isMute ? '<i class="ri-volume-up-fill"></i>' : '<i class="ri-volume-mute-fill"></i>'} 
                          </div>
                          <div id="${idx}" class="like">
                              <h4 class="like-icon">${reel.isLiked ? '<i class="ri-heart-fill"></i>': '<i class="ri-heart-line"></i>'}</h4>
                              <h6>${reel.likeCount}</h6>
                          </div>
                          <div class="comment">
                              <h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
                              <h6>${reel.commentCount}</h6>
                          </div>
                          <div class="share">
                              <h4 class="share-icon"><i class="ri-send-plane-line"></i></h4>
                              <h6>${reel.shareCount}</h6>
                          </div>
                          <div id="${idx}" class="save">
                              <h4 class="save-icon">${reel.isSaved ? '<i class="ri-bookmark-line"></i>' : '<i class="ri-bookmark-fill"></i>'}</h4>
                              <h6>${reel.saveCount}</h6>
                          </div>
                          <div class="three-dots">
                              <h4 class="three-dots-icon"><i class="ri-more-2-fill"></i></h4>
                          </div>
                      </div>
                  </div>
                  `
  });
  
  allReels.innerHTML = sum;
}
addData();

allReels.addEventListener('click',function(dets){
  if(dets.target.className == 'like'){
    if(!reelsData[dets.target.id].isLiked){
      reelsData[dets.target.id].likeCount++;
      reelsData[dets.target.id].isLiked = true ;
    }
    else{
      reelsData[dets.target.id].likeCount--;
      reelsData[dets.target.id].isLiked = false ;
    }
    addData();
  }
  if(dets.target.className == 'save'){
    if(!reelsData[dets.target.id].isSaved){
      reelsData[dets.target.id].saveCount++;
      reelsData[dets.target.id].isSaved = true ;
    }
    else{
      reelsData[dets.target.id].saveCount--;
      reelsData[dets.target.id].isSaved = false ;
    }
    addData();
  }
  if(dets.target.className == 'follow'){
    if(!reelsData[dets.target.id].isFollowed){
      reelsData[dets.target.id].isFollowed = true ;
    }
    else{
      reelsData[dets.target.id].isFollowed = false ;
    }
    addData();
  }
  if(dets.target.className == 'mute'){
    if(!reelsData[dets.target.id].isMute){
      reelsData[dets.target.id].isMute = true ;
    }
    else{
      reelsData[dets.target.id].isMute = false ;
    }
    addData();
  }

})
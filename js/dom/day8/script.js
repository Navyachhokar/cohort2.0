const reelsData = [
  {
    username: "shualong_wei",
    likeCount: '23.3k',
    isLiked: false,
    commentCount: 2300,
    caption: "End of summer ☀️🍉 bc fall is right around the corner...",
    video: "./reels/reel1.mp4",
    userProfile: "https://images.unsplash.com/photo-1766693931664-4d5db815f0c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    shareCount: '16k',
    isFollowed: false,
    saveCount: '1k',
    story: true,
  },
  {
    username: "fujifilm",
    likeCount: '14.5k',
    isLiked: true,
    commentCount: '18.1k',
    caption: "Wrapped gifts under a decorated Christmas tree 🎄✨",
    video: "./reels/reel2.mp4",
    userProfile: "https://images.unsplash.com/profile-1708755306433-16b9a7e1585b?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    shareCount: '560',
    isFollowed: true,
    saveCount: '76.6k',
    story: false,
  },
  {
    username: "brooke_balentine",
    likeCount: '4k',
    isLiked: false,
    commentCount: '500',
    caption: "Christmas is around the corner & what else can feel better?",
    video: "./reels/reel3.mp4",
    userProfile: "https://images.unsplash.com/profile-1759028613204-d0ef302784f2image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    shareCount: '250',
    isFollowed: false,
    saveCount: '100',
    story: true,
  },
  {
    username: "travelwithme",
    likeCount: '98k',
    isLiked: false,
    commentCount:'12.2k',
    caption: "Lost in the mountains ⛰️",
    video: "./reels/reel4.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8fDA%3D",
    shareCount: '500',
    isFollowed: false,
    saveCount: '61k',
    story: false,
  },
  {
    username: "daily.fit",
    likeCount: '35k',
    isLiked: true,
    commentCount: '46.5k',
    caption: "Consistency > motivation 💪",
    video: "./reels/reel5.mp4",
    userProfile: "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvfGVufDB8fDB8fHww",
    shareCount: '900',
    isFollowed: true,
    saveCount: '140',
    story: false,
  },
  {
    username: "foodie.diaries",
    likeCount: '150k',
    isLiked: false,
    commentCount:'21.7k',
    caption: "Street food hits different 🌮🔥",
    video: "./reels/reel6.mp4",
    userProfile: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvfGVufDB8fDB8fHww",
    shareCount: '1M',
    isFollowed: false,
    saveCount: '50.5k',
    story: false,
  },
  {
    username: "codingwithsam",
    likeCount: '1M',
    isLiked: true,
    commentCount: '80.9k',
    caption: "Frontend dev is all about details 🧠💻",
    video: "./reels/reel7.mp4",
    userProfile: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    shareCount: '30.6k',
    isFollowed: true,
    saveCount: '54.4k',
    story: false,
  },
  {
    username: "nature.clicks",
    likeCount: '1.3M',
    isLiked: false,
    commentCount: '33k',
    caption: "Morning light through the trees 🌿",
    video: "./reels/reel8.mp4",
    userProfile: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    shareCount: '112.8k',
    isFollowed: false,
    saveCount: '16.7k',
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
    story: false,
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
    story: false,
  }
];
var sum = '';
reelsData.forEach(function(reel){
    
    sum += `
        <div class="reel">
                    <video class="main-img" src="${reel.video}" autoplay loop muted playsinline></video>
                    <div class="bottom">
                        <div class="user">
                            <div class="image-container ${reel.story ? "story-ring":"" }">
                                <img src="${reel.userProfile}" alt="unsplash image">
                            </div>
                            <h4>${reel.username}</h4>
                            <button>${reel.isFollowed ? "Following": "Follow"}</button>
                        </div>
                        <p>${reel.caption}...<span>see more</span></p>
                        
                    </div>
                    <div class="right">
                        <div class="like">
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
                        <div class="save">
                            <h4 class="save-icon"><i class="ri-bookmark-line"></i></h4>
                            <h6>${reel.saveCount}</h6>
                        </div>
                        <div class="three-dots">
                            <h4 class="three-dots-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>
                `
});

var allReels = document.querySelector('.all-reels');
allReels.innerHTML = sum;


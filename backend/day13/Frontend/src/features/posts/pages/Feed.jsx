import '../style/feed.scss'
import Post from '../components/Post';
import { usePost } from '../hook/usePost';
import { useEffect } from 'react';

const Feed = () => {
  const {feed, handleGetFeed, loading} = usePost()

  useEffect(()=>{
    handleGetFeed()
  },[])

  if(loading || !feed){
    return (
      <main>
        <h1>Feed is Loading...</h1>
      </main>
    )
  }

  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          {feed.map((post,idx)=>{
            return <Post key={idx} user={post.user} post={post}/>
          })}
        </div>
      </div>
    </main>
  );
}

export default Feed

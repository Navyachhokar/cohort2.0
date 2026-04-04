import '../style/feed.scss'
import Post from '../components/Post';
import { usePost } from '../hook/usePost';
import { useEffect } from 'react';
import Nav from '../../shared/components/Nav';
import Sidebar from '../../shared/components/Sidebar';

const Feed = () => {
  const {
    user,
    feed,
    handleGetFeed,
    loading,
    handleLike,
    handleSave,
    sidebarData,
    pendingRequests,
    handleFollowUser,
    handleRespondRequest,
  } = usePost();

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
      <Nav />
      <div className="feed-page-layout">
        <section className='side-bar-section'>
          <Sidebar
          user={user}
            sidebarData={sidebarData}
            pendingRequests={pendingRequests}
            handleFollowUser={handleFollowUser}
            handleRespondRequest={handleRespondRequest}
          />
        </section>
        <div className="feed">
          <div className="posts">
            {feed.map((post, idx) => {
              return (
                <Post
                  key={idx}
                  user={post.user}
                  post={post}
                  loading={loading}
                  handleLike={handleLike}
                  handleSave={handleSave}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Feed

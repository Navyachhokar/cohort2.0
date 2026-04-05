import {
  getFeed,
  createPost,
  likePost,
  savePost,
  getSidebarData,
  followUser,
  getPendingRequests,
  respondToRequest,
} from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {
  const context = useContext(PostContext);

  const {
    user,
    setUser,
    loading,
    setLoading,
    post,
    setPost,
    setStats,
    // suggestions,
    setSuggestions,
    feed,
    setFeed,
    sidebarData,
    setSidebarData,
    pendingRequests,
    setPendingRequests,
  } = context;

  const stats = sidebarData.stats;
  const suggestions = sidebarData.suggestions;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getFeed();
    setFeed(data.posts);
    setLoading(false);
  };

  const handleCreatePost = async (imageFile, caption) => {
    setLoading(true);
    const data = await createPost(imageFile, caption);
    setFeed([data.post, ...feed]);
    setLoading(false);
  };

  const handleLike = async (postId) => {
    const updatedFeed = feed.map((p) =>
      p._id === postId ? { ...p, isLiked: !p.isLiked } : p,
    );
    setFeed(updatedFeed);

    try {
      await likePost(postId);
    } catch (error) {
      handleGetFeed();
    }
  };

  const handleSave = async (postId) => {
    const updatedFeed = feed.map((p) =>
      p._id === postId ? { ...p, isSaved: !p.isSaved } : p,
    );
    setFeed(updatedFeed);

    try {
      await savePost(postId);
    } catch (error) {
      handleGetFeed();
    }
  };

  const handleGetRequests = async () => {
    const data = await getPendingRequests();
    setPendingRequests(data.requests);
  };

  const handleGetSidebar = async () => {
    try {
      const data = await getSidebarData();
      // No need to filter here anymore, the backend handles it now!
      setSidebarData({
        stats: data.stats,
        suggestions: data.suggestions,
      });
      setUser(data.currentUser);
    } catch (error) {
      console.error("Error fetching sidebar", error);
    }
  };

  const handleFollowUser = async (username) => {
    try {
      await followUser(username);
      // REFRESH data from server immediately
      await handleGetSidebar();
    } catch (error) {
      console.error("Failed to follow user:", error);
    }
  };

  const handleRespondRequest = async (requestId, action) => {
    try {
      await respondToRequest(requestId, action);
      // REFRESH both lists to update badge and sidebar counts
      await handleGetRequests();
      await handleGetSidebar();
    } catch (error) {
      console.error("Failed to respond to request:", error);
    }
  };
  
  // useEffect(() => {
  //   handleGetFeed();
  //   handleGetSidebar();
  //   handleGetRequests();
  // }, []);

  return {
    stats,
    suggestions,
    user,
    loading,
    feed,
    post,
    handleGetFeed,
    handleCreatePost,
    handleLike,
    handleSave,
    sidebarData,
    pendingRequests,
    handleFollowUser,
    handleRespondRequest,
    handleGetSidebar,
    handleGetRequests,
  };
};

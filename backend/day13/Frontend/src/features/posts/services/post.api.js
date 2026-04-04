import axios from "axios";
import { Form } from "react-router";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function getFeed() {
  const response = await api.get("api/post/feed");
  return response.data;
}

export async function createPost(imageFile, caption) {
  if (!imageFile) throw new Error("No image file provided");

  const formData = new FormData();

  formData.append("image", imageFile);
  formData.append("caption", caption);

  const reponse = await api.post("/api/post", formData);

  return reponse.data;
}

export async function likePost(postId) {
  const response = await api.post("/api/post/like/" + postId);
  return response.data;
}

export async function savePost(postId) {
  const response = await api.post("/api/post/save/" + postId);
  return response.data;
}

// Get sidebar stats and suggestions
export async function getSidebarData() {
  const response = await api.get("/api/user/sidebar");
  return response.data;
}

// Get pending requests for the notification list
export async function getPendingRequests() {
  const response = await api.get("/api/user/requests");
  return response.data;
}

// Follow a user
export async function followUser(username) {
  const response = await api.post(`/api/user/follow/${username}`);
  return response.data;
}

// Accept/Reject request
export async function respondToRequest(requestId, action) {
  const response = await api.post("/api/user/follow/respond", {
    requestId,
    action,
  });
  return response.data;
}
import React from "react";
import "../sidebar.scss";

const Sidebar = ({
  user,
  sidebarData,
  pendingRequests,
  handleFollowUser,
  handleRespondRequest,
}) => {
  return (
    <div className="sidebar-container">
      <div className="top">
        <div className="sidebar-header">
          <div className="user-profile">
            <div className="img-wrapper">
              <img
                src={
                  user?.profileImage ||
                  `https://api.dicebear.com/7.x/initials/svg?seed=${user?.username || "User"}`
                }
                alt="profile"
                className="user-avatar"
                onError={(e) => {
                  e.target.src =
                    "https://api.dicebear.com/7.x/initials/svg?seed=Unknown";
                }}
              />
            </div>

            <div className="user-meta">
              <span className="user-username">{user?.username || "Guest"}</span>
            </div>
          </div>
        </div>
        <div className="profile-summary">
          <div className="stats">
            <span>
              <b>{sidebarData.stats.followers}</b> followers
            </span>
            <span>
              <b>{sidebarData.stats.following}</b> following
            </span>
          </div>
        </div>
      </div>
      <div className="bottom">
        {pendingRequests.length > 0 && (
          <div className="notifications">
            <p className="title">Requests</p>
            {pendingRequests.map((req) => (
              <div key={req._id} className="req-item">
                <span>{req.follower}</span>
                <div className="btn-group">
                  <button
                    className="confirm-btn"
                    onClick={() => handleRespondRequest(req._id, "accepted")}
                  >
                    Confirm
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleRespondRequest(req._id, "rejected")}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="suggestions">
          <p className="title">Suggested for you</p>
          {sidebarData.suggestions?.length > 0 ? (
            sidebarData.suggestions.map((sugUser) => (
              <div key={sugUser._id} className="sug-item">
                <span>{sugUser.username}</span>
                <button
                  className="follow"
                  onClick={() => handleFollowUser(sugUser.username)}
                >
                  Follow
                </button>
              </div>
            ))
          ) : (
            <p className="empty-msg">No suggestions</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

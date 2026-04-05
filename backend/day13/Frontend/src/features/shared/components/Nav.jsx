import React, { useState } from "react";
import "../nav.scss";
import { useLocation, useNavigate } from "react-router";
import { usePost } from "../../posts/hook/usePost";
import * as Tooltip from "@radix-ui/react-tooltip";

const Nav = () => {
  const [showRequests, setShowRequests] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();
  const { pendingRequests, handleRespondRequest } = usePost();

  const isHomePage = location.pathname === "/";

  return (
    <div className="nav-bar">
      <div
        className="left"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <div className="insta-logo">
          <img src="../../../assets/instaLogo.png" alt="Instagram logo" />
        </div>
        <img src="../../../assets/instaFont.png" alt="Instagram Font" />
      </div>

      <Tooltip.Provider delayDuration={200}>
        <div className="right">
          {/* 1. HOME ICON: Visible ONLY if NOT on Home Page */}
          {!isHomePage && (
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => navigate("/")}
                  className="button secondary-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                  </svg>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="tooltip-content"
                  sideOffset={5}
                  side="bottom"
                >
                  Home
                  <Tooltip.Arrow className="tooltip-arrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          )}

          {/* 2. HEART ICON: Always visible, toggles dropdown */}
          <div className="heart-container">
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => setShowRequests(!showRequests)} // Toggle dropdown
                  className={`nav-icon-btn ${showRequests ? "active" : ""}`}
                >
                  <div className="icon-wrapper">
                    <svg
                      viewBox="0 0 24 24"
                      fill={showRequests ? "red" : "none"} // Fill red when open
                      stroke={showRequests ? "red" : "currentColor"}
                      strokeWidth="2"
                      width="24"
                      height="24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {pendingRequests?.length > 0 && (
                      <span className="notification-badge">
                        {pendingRequests.length}
                      </span>
                    )}
                  </div>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="tooltip-content"
                  sideOffset={5}
                  side="bottom"
                >
                  Requests
                  <Tooltip.Arrow className="tooltip-arrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>

            {/* 4. THE DROPDOWN CONTENT */}
            {showRequests && (
              <div className="requests-dropdown">
                <p className="dropdown-title">Follow Requests</p>
                <div className="dropdown-list">
                  {pendingRequests.length > 0 ? (
                    pendingRequests.map((req) => (
                      <div key={req._id} className="dropdown-item">
                        <span className="req-username">{req.follower}</span>
                        <div className="req-actions">
                          <button
                            className="confirm-btn"
                            onClick={() =>
                              handleRespondRequest(req._id, "accepted")
                            }
                          >
                            Confirm
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleRespondRequest(req._id, "rejected")
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="empty-msg">No new requests</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 3. CREATE ICON: Visible ONLY if on Home Page */}
          {isHomePage && (
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => navigate("/create-post")}
                  className="button primary-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11 11.0001L11 2.0005L13 2.00049L13 11.0001L22.0001 10.9999L22.0002 12.9999L13 13.0001L13.0001 22L11.0001 22L11.0001 13.0001L2.00004 13.0003L2 11.0003L11 11.0001Z"></path>
                  </svg>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="tooltip-content"
                  sideOffset={5}
                  side="bottom"
                >
                  Create post
                  <Tooltip.Arrow className="tooltip-arrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          )}
        </div>
      </Tooltip.Provider>
    </div>
  );
};

export default Nav;

import React from "react";
import "../nav.scss";
import { useNavigate } from "react-router";
import * as Tooltip from "@radix-ui/react-tooltip";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <div className="left">
        <div className="insta-logo">
          <img src="../../../assets/instaLogo.png" alt="Instagram logo" />
        </div>
        <img src="../../../assets/instaFont.png" alt="Instagram Font" />
      </div>

      <Tooltip.Provider delayDuration={200}>
        <div className="right">
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

          {/* --- Create Post Button --- */}
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
        </div>
      </Tooltip.Provider>
    </div>
  );
};

export default Nav;

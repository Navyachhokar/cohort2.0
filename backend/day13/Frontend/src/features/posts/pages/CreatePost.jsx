import React, { useState, useRef } from "react";
import "../style/createpost.scss";
import { usePost } from "../hook/usePost";
import { useNavigate } from "react-router";
import Nav from "../../shared/components/Nav";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const postImageInputFieldRef = useRef(null);

  const { loading, handleCreatePost } = usePost();
  const navigate = useNavigate();

  function handleCancelImage() {
    setSelectedFile(null);
    setPreviewUrl("");
    setStatusMessage("");
    if (postImageInputFieldRef.current) {
      postImageInputFieldRef.current.value = "";
    }
  }

  function handleCropResize() {
    alert("Crop/Resize functionality coming soon!");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const file = selectedFile || postImageInputFieldRef.current.files[0];

    if (!file) {
      alert("Please select an image");
      return;
    }

    if (!caption.trim()) {
      alert("Please add a caption");
      return;
    }

    setStatusMessage("Uploading...");

    try {
      await handleCreatePost(file, caption);
      setStatusMessage("Upload complete");
      setSelectedFile(null);
      setPreviewUrl("");
      setCaption("");
      navigate("/");
    } catch (error) {
      setStatusMessage("Upload failed. Try again.");
      console.error(error);
    }
  }

  if (loading) {
    return (
      <main>
        <h1>wait for a while..</h1>
      </main>
    );
  }

  return (
    <main className="create-post-page">
      <div className="nav">
        <Nav />
      </div>
      <div className="content-section">
        <div className="form-container">
          <h1>Create Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="image-container">
              <label className="post-image-label" htmlFor="image">
                Select an Image
                <span className="image-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path>
                  </svg>
                </span>
              </label>
              <input
                ref={postImageInputFieldRef}
                hidden
                type="file"
                name="image"
                id="image"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setSelectedFile(file);
                    setPreviewUrl(URL.createObjectURL(file));
                    setStatusMessage("Image ready to upload");
                  }
                }}
              />
            </div>
            {previewUrl && (
              <div className="image-preview-wrapper">
                <div className="image-preview">
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={handleCancelImage}
                    title="Remove image"
                  >
                    ✕
                  </button>
                  <img src={previewUrl} alt="preview" />
                </div>
                <div className="image-actions">
                  <button
                    type="button"
                    className="crop-btn"
                    onClick={handleCropResize}
                  >
                    Crop/Resize
                  </button>
                </div>
              </div>
            )}
            {statusMessage && <p className="status-text">{statusMessage}</p>}

            <input
              value={caption}
              onChange={(e) => {
                setCaption(e.target.value);
              }}
              type="text"
              name="caption"
              id="caption"
              placeholder="Enter your caption"
            />
            <button className="button primary-button">Create </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreatePost;

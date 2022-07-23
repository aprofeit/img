import React, { useState } from "react"
import * as Icons from "react-feather"
import { useFilePicker } from "use-file-picker";

export default function Upload() {
  const [uploading, setUploading] = useState(false);

  const [openFilePicker, { filesContent }] = useFilePicker({
    accept: "image/*",
    maxFileSize: 20,
    multiple: false,
    readAs: "DataURL",
  });

  if (filesContent.length === 1) {
    console.log('got file');
  }

  const uploadOnClick = () => {
    setUploading(true);
    openFilePicker();
  }

  return (
    <React.Fragment>
      <div className="upload-container">
        <div className="upload-btn" onClick={() => uploadOnClick()}>
          <Icons.Upload size={128} strokeWidth={0.4} />
          <div>
            <span className="upload-text">{ uploading ? "Uploading..." : "Upload image" }</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

import React from "react"
import * as Icons from "react-feather"

class Upload extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="upload-container">
          <div className="upload-btn" onClick={() => { alert("hello world") }}>
            <Icons.Upload size={128} strokeWidth={0.4} />
            <div>
              <a className="upload-text">Upload image</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Upload

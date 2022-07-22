import React from "react"
import * as Icons from "react-feather"

class Upload extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="upload-container">
          <div>
            <Icons.Upload />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Upload

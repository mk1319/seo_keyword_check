import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";


export default function EditorApp(props) {
  const editor = useRef(null);
  const [content, setContent] = useState("Start writing");
  const config = {
    readonly: false,
  };


  return (
    <div className="App">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={props.handleUpdate}
        onChange={props.handleOnChange}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </div>
  );
}
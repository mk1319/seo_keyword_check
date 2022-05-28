import React, { useState } from 'react';
import { EditorState, convertToRaw,ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function EditorConvertToHTML({handleOnChange}){
  const [editor, seteditor] = useState(EditorState.createWithContent(ContentState.createFromText('Start Writing from here...')))


  function onEditorStateChange(editorState){

    var data = convertToRaw(editorState.getCurrentContent()).blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n')
    handleOnChange(data)
    seteditor(editorState)
  };

  
    return (
        <Editor
          editorState={editor}
          webDriverTestID="Editor"
          wrapperClassName="editor-action"
          editorClassName="editor-content"
          onEditorStateChange={onEditorStateChange}
        />
    )
  
}

export default EditorConvertToHTML
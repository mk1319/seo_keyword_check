import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function EditorConvertToHTML({handleOnChange}){
    const [editor, seteditor] = useState(EditorState.createEmpty())
  

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
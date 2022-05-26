import React,{useState,useEffect} from 'react';
import EditorApp from './component/editor/Editor';
import EditorConvertToHTML from './component/editor/EditorWrapper';
import KeywordSection from './component/result';
import AddKeyword from './component/result/AddKeywords';
import KeywordList from './component/result/KeywordList';


function App() {

  const [content, setContent] = useState("");


  const handleOnChange = (value) => {
    setContent(value)    
  };

  useEffect(() => {
    
    return () => {};
  }, [])
  

  return (
    <div className="container">
      <h1>Hello World!</h1>
      <div className='row'>
        <div className='col-8'>
            {/* <EditorApp handleUpdate={handleUpdate} handleOnChange={handleOnChange}/> */}
            <EditorConvertToHTML handleOnChange={handleOnChange}/>
        </div>
        <div className='col-4'>
            <KeywordSection editorContent={content}/>
        </div>

      </div>
    


    </div>
  );
}

export default App;

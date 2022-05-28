import React,{useState,useEffect} from 'react';
import EditorApp from './component/editor/Editor';
import EditorConvertToHTML from './component/editor/EditorWrapper';
import KeywordSection from './component/result';
import AddKeyword from './component/result/AddKeywords';
import KeywordList from './component/result/KeywordList';
import './component/css/app.css';

function App() {

  const [content, setContent] = useState("");


  const handleOnChange = (value) => {
    setContent(value)    
  };

  useEffect(() => {
    
    return () => {};
  }, [])
  

  return (
    <div className="container main-body">
      <div className='row card-body action-section'>
        <div  className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8' style={{height:'100vh'}}>
            {/* <EditorApp handleUpdate={handleUpdate} handleOnChange={handleOnChange}/> */}
            <EditorConvertToHTML handleOnChange={handleOnChange}/>
        </div>
        <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
            <KeywordSection editorContent={content}/>
        </div>

      </div>
    


    </div>
  );
}

export default App;

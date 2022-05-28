import React,{useState,useEffect} from 'react'
import AddKeyword from './AddKeywords'
import KeywordList from './KeywordList'

export default function KeywordSection(props) {
    
    const [keywords, setkeywords] = useState([])
    const [handleRefresh, setHandleRefresh] = useState(false)

    useEffect(()=>{


    let  htmlParse = props.editorContent.toLowerCase();
   
    let currentKeywords = []
    keywords.map((e)=>{
        let regExp = new RegExp(e.value.toLowerCase(), "gi")
        let matchRes = htmlParse.match(regExp)
        if(Array.isArray(matchRes)){
            e.current = matchRes.length
        } else {
            e.current = 0
        }
        currentKeywords.push(e)
    })
    setkeywords(currentKeywords)

    if(keywords.length ==0 && localStorage.getItem("keywords")&&Array.isArray(JSON.parse(localStorage.getItem("keywords")))&&JSON.parse(localStorage.getItem("keywords")).length){
        let storeKeyword = JSON.parse(localStorage.getItem("keywords"))
        setkeywords(storeKeyword)
    }
    setHandleRefresh(!handleRefresh)

    },[props.editorContent])



    const handleSubmit = (newKeyword,minArrive,maxArrive) => {
        let  htmlParse = props.editorContent.toLowerCase();
        let preKeywords = keywords
        let regExp = new RegExp(newKeyword.toLowerCase(), "gi")
        let matchRes = htmlParse.match(regExp)
        let current = 0 
        if(Array.isArray(matchRes)){
            current= matchRes.length
        } else {
            current = 0
        }

        preKeywords.push({
            value:newKeyword,
            min:parseInt(minArrive),
            max:parseInt(maxArrive),
            current:current
        })
        setkeywords(preKeywords)
        localStorage.setItem("keywords",JSON.stringify(preKeywords))
    
        setHandleRefresh(!handleRefresh)
    }

    const handleRemove = (value) =>{
        let result = keywords.filter((e)=>e.value != value)
        localStorage.setItem("keywords",JSON.stringify(result))
        setkeywords(result)
    }






    return (
        <div className='row flex-column keyword-section'>
                <div className='col-4 add-keyword' style={{width:'100%'}}>
                <AddKeyword  handleSubmit={handleSubmit}/>
                </div>
                <div className='col-4 inrange-keyword' style={{width:'100%'}}>
                <KeywordList keywords={keywords.filter((e)=>e.current <= e.max)} handleRemove={handleRemove}/>
                </div>
                <div className='col-4 outrange-keyword' style={{width:'100%'}}>
                <KeywordList keywords={keywords.filter((e)=>e.current > e.max)} handleRemove={handleRemove}/>
                </div>
        </div>  
  )
}

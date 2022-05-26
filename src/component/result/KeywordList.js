import React, { useState,useEffect } from 'react'

/**
 *  [
 *      {
 *          value:
 *          min:
 *          max:
 *          current:
 *      }
 *  ]
 * @returns  
 */

function KeywordList(props) {

    const [keywords, setKeywords] = useState([])

    useEffect(() => {
        console.log("PROPS.KEYWORD",props.keywords)
        if(props.keywords&&Array.isArray(props.keywords)){
            setKeywords(props.keywords)
        }
        return () => {};
    }, [props.keywords])


    function randerKeyword(e){
        let className = "" 
        let count = 0
        if(e.current == e.max){
            className = "badge bg-success"
        } else if(e.current == 0 ){
            className = "badge bg-secondary"
        } else if(e.current > 0 && e.current < e.max ){
            className = "badge bg-warning"
        } else if(e.current > e.max ){
            className = "badge bg-danger"
            count = e.current - e.max
        }

        return <span className={className}>
        {e.value} {count?`      ${count}`:''}{"       "}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            cursor="pointer"
            onClick={()=>props.handleRemove(e.value)}
            class="bi bi-x"
            viewBox="0 0 16 16"
        >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        </span>
    }

 return (
   <div>
       {
           keywords.map((e)=>
                randerKeyword(e)
           )
       }
   </div>
 );
}

export default KeywordList
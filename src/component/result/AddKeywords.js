import React, { useState } from 'react'

function AddKeyword(props) {
  const [newKeyword, setnewKeyword] = useState("")
  const [minArrive, setMinArrive] = useState("")
  const [maxArrive, setMaxArrive] = useState("")

  

  const handleSubmit=()=>{
    props.handleSubmit(newKeyword,minArrive,maxArrive)
    setnewKeyword("")
    setMaxArrive("")
    setMinArrive("")
  }


  return (
    <div>
          Keyword <input type="text" value={newKeyword}
            onChange={(e)=>{setnewKeyword(e.target.value)}}
           />
          Min <input type="number" value={minArrive}
            onChange={(e)=>{setMinArrive(e.target.value)}}
           />
          Max <input type="number" value={maxArrive}
            onChange={(e)=>{setMaxArrive(e.target.value)}}
           />
          <button onClick={handleSubmit}>
             Add Keyword
          </button>
    </div>
  )
}

export default AddKeyword
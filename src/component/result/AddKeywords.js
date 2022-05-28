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
      <div className="form-group">
          <label for="Keyword">Keyword</label>
          <input type="text" className="form-control" id="Keyword" aria-describedby="Keyword" placeholder="Enter Keyword" value={newKeyword}
            onChange={(e)=>{setnewKeyword(e.target.value)}}
            />
      </div>
      <div className="form-group">
          <label for="Min">Min</label>
          <input type="number" className="form-control" id="Min" aria-describedby="Min" placeholder="Minimum arrive" value={minArrive}
            onChange={(e)=>{setMinArrive(e.target.value)}}
           />
      </div>
      <div className="form-group">
          <label for="Max">Max</label>
          <input type="number" className="form-control" id="Max" aria-describedby="Max" placeholder="Maximum arrive" value={maxArrive}
            onChange={(e)=>{setMaxArrive(e.target.value)}}
           />
      </div>
      
          <button className="btn btn-secondary mt-2 mb-2" onClick={handleSubmit}>
             Add
          </button>
    </div>
  )
}

export default AddKeyword
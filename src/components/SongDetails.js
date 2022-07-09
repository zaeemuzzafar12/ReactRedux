import React, { useState } from 'react'
import { connect } from 'react-redux'

const SongDetails = ({selectedSongsReducer}) => {
  
    console.log("dddd",selectedSongsReducer)

  return (
    <>
       <h2>Title: {selectedSongsReducer?.title}</h2> 
        <h5>Duration: {selectedSongsReducer?.duration}</h5> 
    </>
  )
}
const mapStateToprops = (state) => {
    console.log(state)
    return { selectedSongsReducer : state?.selectedSongsReducer }
}
export default connect(mapStateToprops)( SongDetails)
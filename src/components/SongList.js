import React, { Component } from 'react'
import { connect } from 'react-redux'
import Song from '../Actions';
import SongDetails from './SongDetails';
export class SongList extends Component {

    renderSongList(){
        const { songsReducer , Song } = this.props
        return songsReducer.map((data) => {
            return(
                <div key={data?.id}>
                        <p>{data?.title}</p>
                        <button onClick={() => Song(data)}>Select</button>
                </div>
            )
        })
    }
   

  render() {

    return (
      <>
      <div>
        { this.renderSongList() }
        <SongDetails  />
      </div>
      </>
    )
  }
}
const MapStateToProps = (state) =>  {
    console.log(state)
    return {songsReducer : state?.songsReducer }
}

export default connect(MapStateToProps , { Song})( SongList)
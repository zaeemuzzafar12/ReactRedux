 const Song = ( songs ) => {
    return{
        type:"SELECTED_SONG",
        payload: songs
    }
}

export default Song
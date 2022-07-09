import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { id: 1, title:"Dil na jane khun",duration:"4:21"},
        { id: 2, title:"Dil ne ye kahan hai dil se",duration:"3:21"},
        { id: 3, title:"Ya Ali",duration:"2:21"},
        { id: 4, title:"Dil ko kara aya",duration:"4:21"},
        { id: 5, title:"Zindagi ne Zindagi bhar ",duration:"4:21"}
    ]
}

const selectedSongsReducer = (selected = null , action) => {
    if(action.type === "SELECTED_SONG") {
        return action.payload;
    }
    return selected;
}

export default  combineReducers ({
    songsReducer:songsReducer,
    selectedSongsReducer:selectedSongsReducer
})


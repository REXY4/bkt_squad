import Slideshow from "react-native-image-slider-show";

const initialState = {
    data : null,
 };
 
 
 const SideShow = (state = initialState, action) => {
     const {type , payload } = action;
     switch(action.type){
         case 'ADD_DATA' : 
            return {
                ...state,
                data : payload
            }     
         default : 
             return state
     }
 };
 
 export default SideShow;
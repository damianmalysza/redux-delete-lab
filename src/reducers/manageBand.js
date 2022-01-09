import uuid from "uuid";

export default function manageBand(state = {
  bands: [],
}, action) {
  console.log(action)
  switch(action.type) {
    case "ADD_BAND":
      return {...state, bands: state.bands.concat({id:uuid(),name:action.name})}
    case "DELETE_BAND":
      console.log("received delete action",action.type)
      return {...state, bands : state.bands.filter(band => band.id !== action.id)}
    default:
      return state
  
  }
};

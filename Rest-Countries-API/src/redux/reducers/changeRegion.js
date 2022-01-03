const changeRegionReducer = (state = '', action) => {

  switch(action.type){
    case 'CHANGE_REGION':
      return action.payload
    default:
      return state
  }

}

export default changeRegionReducer
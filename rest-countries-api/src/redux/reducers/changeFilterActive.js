const changeFilterActiveReducer = (isActive = false, action) => {

  switch(action.type){
    case 'CHANGE_FILTER_ACTIVE':
      return action.payload
    default:
      return isActive
  }

}

export default changeFilterActiveReducer
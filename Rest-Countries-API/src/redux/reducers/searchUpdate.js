const searchUpdateReducer = (state = '', action) => {

  switch(action.type){
    case 'SEARCH_UPDATE':
      return action.payload
    default:
      return state
  }

}

export default searchUpdateReducer
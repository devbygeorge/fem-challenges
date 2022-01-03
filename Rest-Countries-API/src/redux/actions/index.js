export const changeTheme = (theme) => {
  return {
    type: 'CHANGE_THEME',
    payload: theme
  }
}

export const changeRegion = (region) => {
  return {
    type: 'CHANGE_REGION',
    payload: region
  }
}

export const changeFilterActive = (isActive) => {
  return {
    type: 'CHANGE_FILTER_ACTIVE',
    payload: isActive
  }
}

export const searchUpdate = (value) => {
  return {
    type: 'SEARCH_UPDATE',
    payload: value
  }
}
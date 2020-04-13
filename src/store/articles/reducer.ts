const initialState = null

const articles = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default articles

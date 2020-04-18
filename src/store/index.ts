import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

export function initializeStore(initialState: ApplicationState): ReturnType<typeof createStore> {
  return createStore(
    rootReducer,
    initialState,
    process.env.PROFILE === 'prod' ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk))
  )
}

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: any
  }

  // web Share API
  type ShareData = {
    title?: string
    text?: string
    url?: string
    files?: ReadonlyArray<File>
  }

  interface Navigator {
    share?: (data?: ShareData) => Promise<void>
    canShare?: (data?: ShareData) => boolean
  }
  // end web Share API

  interface Document {
    msFullscreenElement: any
    mozCancelFullScreen: any
    webkitExitFullscreen: any
    mozFullScreenElement: any
    webkitFullscreenElement: any
  }
}

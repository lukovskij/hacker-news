import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { initialState } from '../../../store/rootReducer'
import { initializeStore } from '../../../store'

type Props = {
  children: ReactNode
}
export const store = initializeStore(initialState)

export default function StorProvider(props: Props) {
  return <Provider store={store}>{props.children}</Provider>
}

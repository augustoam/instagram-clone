import { useNavigation } from '@react-navigation/native'
import { AppState } from '@redux/store'
import { onLoadingStatusChanged } from '@redux/ui/loader/actions'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import SafeArea from '@components/atoms/SafeArea'

interface Props {
  loading: (isLoading: boolean) => void
  token?: string
}

const MainScreen: React.FC<Props> = (props) => {

  const navigation = useNavigation()

  return <SafeArea paddingTop={5}>

  </SafeArea >
}

const mapState = (state: AppState) => {
  return ({
    token: state.authReducer.token,
    userProfile: state.userReducer.userProfile
  })
}

const mapDispatch = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  loading: (isLoading: boolean) => dispatch(onLoadingStatusChanged(isLoading))
})

export default connect(mapState, mapDispatch)(MainScreen)

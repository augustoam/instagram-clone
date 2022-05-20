import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Keyboard } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import { LocalizationContext } from '@contexts/Translations'
import { BLUE, GRAY, MEDIUM_GRAY, WHITE } from '@styles/colors'
import Styles from '@styles/styles'
import CustomText from '@components/atoms/CustomText'
import DataInput from '@components/organisms/texts/DataInput'
import Button, { ButtonViewRef } from '@components/organisms/buttons/Button'
import KeyboardAvoiding from '@components/atoms/KeyboardAvoiding'
import Image from '@components/atoms/Image'
import PngImage from '@assets/png/PngImage'
import HorizontalLine from '@components/molecules/HorizontalLine'
import SvgIcon from '@assets/svg/SvgIcon'
import IconDataInput from '@components/molecules/IconDataInput'
import { connect } from 'react-redux'
import { AppState } from 'redux/store'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { onMessage } from '@redux/ui/alert/actions'
import { onLoadingStatusChanged } from '@redux/ui/loader/actions'
import { login } from '@redux/authentication/actions'

interface LoginProps {
  isAuthenticated?: boolean
  onMessage: (message: string) => void
  authenticate: (email: string, password: string) => void
  loading: (isLoading: boolean) => void
}

const LoginScreen: React.FC<LoginProps> = (props) => {
  const { translations } = useContext(LocalizationContext)
  const navigation = useNavigation()
  const buttonRef = useRef<ButtonViewRef>(null)

  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [eyePassword, setEyePassword] = useState<boolean>(false)

  const onPressLogin = () => {
    if (email && email != "" && password && password != "") {
      Keyboard.dismiss()
      props.loading(true)
      props.authenticate(email, password)
    } else {
      props.onMessage("error.login.empty.credentials")
    }
  }

  useEffect(() => buttonRef.current?.setDisable(!email || !password), [email, password])

  useEffect(() => {
    if (props.isAuthenticated) {
      goToMain()
    }
  }, [props.isAuthenticated])

  const goToMain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }]
    })
  }

  return <><KeyboardAvoiding>
    <Image source={PngImage.LOGO} />
    <DataInput
      style={{ paddingBottom: 0 }}
      placeholder={translations('auth.email')}
      keyboardType="email-address"
      value={email}
      onChangeText={(value: string) => setEmail(value)}
      rightElement={email ? <IconDataInput onPress={() => setEmail("")} icon={SvgIcon.CANCEL} color={MEDIUM_GRAY} /> : <></>}
    />
    <DataInput
      secureTextEntry={!eyePassword}
      placeholder={translations('auth.password')}
      value={password}
      onChangeText={(value: string) => setPassword(value)}
      rightElement={<IconDataInput onPress={() => setEyePassword(!eyePassword)} icon={SvgIcon.EYE_PASSWORD} color={eyePassword ? BLUE : GRAY} />}
    />

    <CustomText
      onPress={() => { }}
      bold={true}
      color={BLUE}
      style={{
        ...Styles.Common.h6,
        alignSelf: 'flex-end',
        marginTop: 10,
        marginBottom: 10
      }}>
      {translations('auth.forgot.password')}
    </CustomText>

    <Button
      ref={buttonRef}
      onPress={onPressLogin}
      label={translations('login')} />

    <View style={{ marginTop: 10, marginBottom: 10 }}>
      <HorizontalLine label={translations('or')} />
    </View>

    <CustomText
      onPress={() => { }}
      bold={true}
      color={BLUE}
      style={{
        ...Styles.Common.h5,
        alignSelf: 'center'
      }}>
      {translations('auth.login.facebook')}
    </CustomText>

  </KeyboardAvoiding >
    <View style={{ backgroundColor: WHITE, height: 100 }}>
      <HorizontalLine />
      <CustomText
        color={GRAY}
        style={{
          ...Styles.Common.h6,
          alignSelf: 'center'
        }}>
        {translations('auth.no.account')}
        <CustomText
          onPress={() => console.log()}
          bold={true}
          color={BLUE}
          style={{
            ...Styles.Common.h6,
            alignSelf: 'center'
          }}>
          {translations('auth.singup')}
        </CustomText>
      </CustomText>

    </View>
  </>
}

const mapState = (state: AppState) => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

const mapDispatch = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  onMessage: (message: string) => dispatch(onMessage(message)),
  loading: (isLoading: boolean) => dispatch(onLoadingStatusChanged(isLoading)),
  authenticate: (email: string, password: string) => dispatch(login(email, password))
})

export default connect(mapState, mapDispatch)(LoginScreen)

import React from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

// components
import RegisterForm from 'smartchef/src/scenes/register/register.form';
import {
  MainView, BackgroundImageView, TitleView, WraperLabel, LinkButton, LinksView
} from 'smartchef/src/components/auth';
import { loginWithFacebook } from 'smartchef/src/common/firebase.auth'

import Label from 'smartchef/src/components/Label';
import { Colors } from 'smartchef/src/styles/Colors';

//actions
import sessionActions from 'smartchef/src/services/session/session.reducer'

class registerScreen extends React.PureComponent {
  static navigationOptions = {
    headerMode: 'none'
  };
  constructor(props) {
    super(props);
    this.state = {
      titleSize: '42px',
      titleHeight: 46,
      titlePadding: false
    };
    this._keyboardDidShow = this._keyboardDidShow.bind();
    this._keyboardDidHide = this._keyboardDidHide.bind();
    this._bootstrap();
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  _bootstrap = async () => {
    await GoogleSignin.configure({
      scopes: [],
      webClientId: '4335751593-e5pcca1uoh4c4galgk0u13v8o3u24659.apps.googleusercontent.com', // required
    });
  };
  _registerwithGoogle = async () => {
    const { navigation } = this.props;
    try {
      // await GoogleSignin.revokeAccess();
      // await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const { user } = await GoogleSignin.signIn();
      // const user = await auth().signInWithCredential(credential);
      this.registerRef.setFieldsValue({
        full_name: user.name,
        mail: user.email,
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  _keyboardDidShow = () => {
    this.setState({
      titleSize: '22px',
      titleHeight: 22,
      titlePadding: true
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      titleSize: '42px',
      titleHeight: 43,
      titlePadding: false
    });
  };

  _signIn = async signUp => {
    const { registerUser } = this.props;
    registerUser(signUp);
  };

  _registerWithFb = () => {
    const { navigation } = this.props;
    try {
      loginWithFacebook()
        .then(({ user, resutl }) => {
          console.log("fbUser", user, resutl)
          navigation.navigate("Home")
        })
        .catch(err => console.log("err fb", err));
    } catch (error) {
      console.log('el error FbLoggin', error)
    }
  };
  _navigateToLogIn = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn')
  };
  render() {
    const { titleSize, titleHeight, titlePadding } = this.state;
    return (
      <MainView>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <BackgroundImageView
          keyboardShow={titlePadding}
          source={require('smartchef/src/assets/BG.png')}
        >
          <MainView>
            <TitleView titlePadding={titlePadding}>
              <Label
                weight={700}
                size={titleSize}
                lineHeight={titleHeight}
                color={Colors.orange}
                align="center"
              >
                Crear Cuenta
              </Label>
            </TitleView>
            <RegisterForm
              onSubmit={this._signIn}
              ref={ref => (this.registerRef = ref)}
            />
            <LinksView>
              <Label weight={400} size="18px" color={Colors.orange}>
                O registrarse con
              </Label>
              <LinkButton onPress={this._registerWithFb}>
                <Icon name="facebook-square" size={48} color="#1759FC" />
              </LinkButton>
              <LinkButton onPress={this._registerwithGoogle}>
                <Icon name="google" size={48} color={Colors.red} />
              </LinkButton>
            </LinksView>
            <LinksView keyboardShow={titlePadding}>
              <LinkButton onPress={this._navigateToLogIn}>
                <WraperLabel weight={410} color={Colors.orange}>
                  Ingresar
                </WraperLabel>
              </LinkButton>
              <LinkButton>
                <WraperLabel weight={410} color={Colors.orange}>
                  Terminos de Condiciones
                </WraperLabel>
              </LinkButton>
            </LinksView>
          </MainView>
        </BackgroundImageView>
      </MainView>
    );
  }
}

const mapStateToProps = state => ({
});

const mapStateToDispatch = dispatch => ({
  registerUser: values => dispatch(sessionActions.register(values)),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(registerScreen);

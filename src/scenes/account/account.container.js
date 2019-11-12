import { connect } from 'react-redux'

/** Actions */
import AppActions from 'smartchef/src/services/app/app.persist.reducer';
// screen
import AccountScreen from './account.scren';
const mapStateToProps = state => ({
    sessionData: state.appPersist.get('sessionData')
  })
  
  const mapDispatchToProps = dispatch => ({
    logout: user_id => dispatch(AppActions.logout(user_id)),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AccountScreen)
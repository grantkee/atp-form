import { connect } from 'react-redux';
import Navigation from '../components/00-Navigation';
import { login, logout } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        user: state.user,
        clients: state.clients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
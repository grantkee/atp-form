import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
// import { removeCar } action here
import { removeClient, login, logout } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        clients: state.clients
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        removeClient: (index) => dispatch(removeClient(index)),
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
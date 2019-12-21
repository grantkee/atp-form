import { connect } from 'react-redux';
import NewClient from '../components/2a-NewClient';
import { addClient } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addClient: ( client ) => dispatch(addClient( client ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewClient);
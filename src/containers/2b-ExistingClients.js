import { connect } from 'react-redux';
import ExistingClient from '../components/2b-ExistingClient';
import { fetchClients, fetchClient } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        clients: state.clients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClients: () => dispatch(fetchClients()),
        fetchClient: ( id ) => dispatch( fetchClient( id ) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExistingClient);
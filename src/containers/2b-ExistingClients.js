import { connect } from 'react-redux';
import ExistingClients from '../components/2b-ExistingClient';

const mapStateToProps = ( state ) => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(ExistingClients);
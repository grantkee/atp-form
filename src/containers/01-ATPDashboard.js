import { connect } from 'react-redux';
import ATPDashboard from '../components/01-ATPDashboard';
import { fetchClients, fetchClient, removeClient } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        clients: state.clients,
        client: state.client,
        atp: state.atp,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClients: () => dispatch( fetchClients() ),
        fetchClient: ( id ) => dispatch( fetchClient( id) ),
        removeClient: () => dispatch( removeClient() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ATPDashboard);
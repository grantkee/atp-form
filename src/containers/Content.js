import { connect } from 'react-redux';
import Content from '../components/ATP_Dashboard/Content';
import { fetchClients, fetchClient } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        clients: state.clients,
        client: state.client
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClients: () => dispatch(fetchClients()),
        fetchClient: ( id ) => dispatch(fetchClient( id ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
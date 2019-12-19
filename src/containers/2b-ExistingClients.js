import { connect } from 'react-redux';
import ClientList from '../components/2b-ExistingClient';
import { fetchClients } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        clients: state.clients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClients: () => dispatch(fetchClients()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
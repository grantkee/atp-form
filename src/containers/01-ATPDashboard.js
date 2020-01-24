import { connect } from 'react-redux';
import ClientType from '../components/1-ClientType';
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientType);
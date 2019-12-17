import { connect } from 'react-redux';
import ClientList from '../components/2b-ExistingClient';

const mapStateToProps = ( state ) => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(ClientList);
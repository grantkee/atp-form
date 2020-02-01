import { connect } from 'react-redux';
import Measurements from '../components/Measurements';
import { fetchClients } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        client: state.client
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClients: () => dispatch(fetchClients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Measurements);
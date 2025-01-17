import { connect } from 'react-redux';
import ClientDetails from '../components/2b1-ClientDetails';
import { fetchClient } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        client: state.client
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClient: ( id ) => dispatch(fetchClient( id )),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetails);
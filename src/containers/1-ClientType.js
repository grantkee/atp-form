import { connect } from 'react-redux';
import ClientType from '../components/1-ClientType';

const mapStateToProps = ( state ) => {
    return {
        customers: state.customers
    }
}

export default connect(mapStateToProps)(ClientType);
import { connect } from 'react-redux';
import Measurements from '../components/Measurements';

const mapStateToProps = (state) => {
    return {
        client: state.client
    }
}

export default connect(mapStateToProps)(Measurements);
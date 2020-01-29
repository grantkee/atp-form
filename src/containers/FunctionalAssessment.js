import { connect } from 'react-redux';
import FunctionalAssessment from '../components/FunctionalAssessment';

const mapStateToProps = (state) => {
    return {
        client: state.client
    }
}

export default connect(mapStateToProps)(FunctionalAssessment);
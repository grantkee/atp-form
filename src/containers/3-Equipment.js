import { connect } from 'react-redux'
import Equipment from '../components/3-Equipment'

const mapStateToProps = (state) => {
    return {
        clients: state.clients,
        equipment: state.equipment
    }
}

export default connect(mapStateToProps)(Equipment);

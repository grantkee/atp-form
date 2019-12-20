import { connect } from 'react-redux'
import Equipment from '../components/3-Equipment'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        clients: state.clients,
        equipment: state.equipment
    }
}

export default connect(mapStateToProps)(Equipment);

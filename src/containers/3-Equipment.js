import { connect } from 'react-redux'
import Equipment from '../components/3-Equipment'

const mapStateToProps = (state) => {
    return {
        client: state.client,
        equipment: state.equipment
    }
}

export default connect(mapStateToProps)(Equipment);
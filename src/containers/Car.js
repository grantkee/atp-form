import { connect } from 'react-redux'
import Car from '../components/Car'

const mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(Car)

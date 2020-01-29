import { connect } from 'react-redux';
import Equipment from '../components/3-Equipment';
import { addEquipment } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        client: state.client,
        equipment: state.equipment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEquipment: ( equipment ) => dispatch(addEquipment( equipment )),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);
import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { signout } from '../../actions';
import * as actions from '../../actions';

class Signout extends Component {

    componentDidMount() {
        this.props.signout();
    }


    render() {
        return (
            <div>
                Sorry to see yo ugo
            </div>
        )
    }
}

//export default connect(null, { signout })(Signout);
export default connect(null, actions)(Signout);

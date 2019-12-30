import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';


class ${NAME} extends Component {
    constructor(props) {
        super(props);
        // TODO: Constructor variables and function binds
    }
    
    componentDidMount(){
        // TODO: Your component behaviour when it is mounted
    }
    
    componentWillReceiveProps(nextProps) {
        // TODO: Your component behaviour when it will receive props
    }
    
    render() {
        return (
            <div>
                {/*TODO: type your html code here*/}
            </div>
        );
    }
}

${NAME}.defaultProps = {
    // TODO: Type your default props
};

${NAME}.propTypes = {
    // TODO: Type your props
};

const mapStateToProps = state => ( {
    // TODO: type your state variables
});

const mapDispatchToProps = dispatch => ({
 // TODO: call dispatch methods
});
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(${NAME});

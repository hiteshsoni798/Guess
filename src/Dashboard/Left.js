import React, { Component } from 'react';
import WordMatch from '/home/soni/Music/React/my-app/src/Dashboard/wordMatch';
import Tried from '/home/soni/Music/React/my-app/src/Dashboard/try';
import PositionMatch from '/home/soni/Music/React/my-app/src/Dashboard/positionMatch';
import {connect} from 'react-redux';
import redux from 'redux';
import { password } from '../redux/actionCreaters';

class Left extends Component {
  render(){
    return (
      <div id="left" >
        <Tried {...this.props}/>
        <WordMatch char_match={this.props.char_match}/>
        <PositionMatch pos_match={this.props.pos_match}/>
     </div>

   );
 }
}

const mapStateToProps = state => ({value1: state.value});
const mapDispatchToProps = (dispatch) => ({
	a(val) {
		dispatch(password(val));
	}
});


export default connect( mapStateToProps, mapDispatchToProps)(Left)

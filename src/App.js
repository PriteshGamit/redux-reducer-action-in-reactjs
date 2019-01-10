import React, { Component } from 'react';
import './App.css';
import './asset/css/bootstrap.min.css';
import './asset/css/bootstrap.css';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requsetapidata} from './action/Action';


class App extends Component {
  componentDidMount()
  {
    this.props.requsetapidata();
  }
  
    render() {
    const {data=[]} =this.props.data;
    console.log("data:",data);
    return (
      <div className="container">

      <table className="table table-striped">
      <thead>
        <th>ID</th>
        <th>Title</th>
        </thead>
      <tbody>
        {data.map((x,i) => 
          <tr key={x.id.value}>
            <td>{x.id}</td>
            <td>{x.title}</td>
          </tr>
          )}
          </tbody>
          </table>
      </div>
    );
  }
}
const mapStateToProps = state =>({data:state.data});

const  mapDispatchToProps  = dispatch =>
    bindActionCreators({requsetapidata},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App);

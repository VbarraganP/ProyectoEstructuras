import React, { Component } from "react";
import { connect } from "react-redux";
import { createService } from "../../Store/Actions/ServiceActions";

class CreateService extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createService(this.state);
    console.log(this.props);
  };
  render() {
    return (
        
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="display-3">Crea Un nuevo servicio</h5>
            <div className="container w-50 h-50">
                

                <div className="form-group">
                    <label htmlFor="title" className="h4"  >Titulo</label>
                    <input type="text" id="title" className="form-control" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="content" className="h4">Post Content</label>
                    <textarea
                    id="content"
                    className="form-control"
                    onChange={this.handleChange}
                    ></textarea>
                </div>
                
                <div className="input-field">
                    <button className="btn btn-success">Create</button>
                </div>

            </div>
        </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createService: (service) => dispatch(createService(service)),
  };
};

export default connect(null, mapDispatchToProps)(CreateService);

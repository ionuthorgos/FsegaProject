import React, {PropTypes} from 'react';

class FormPage extends  React.Component {
  render(){
    return(
    <div>
    <br /><br /><br />
  <div className="panel panel-default">
    <div className="panel-heading clearfix">
      <h3 className="panel-title pull-left">Contact Form</h3>
      <div className="pull-right">
        <label className="checkbox-inline">
          <input type="checkbox"
          
          /> Email
        </label>
        <label className="checkbox-inline">
          <input
          /> Question
        </label>
      </div>
    </div>
    <label className="checkbox-inline">
          <input placeholder="Numele de Familie"
          /> 
        </label> <br /><br />
        <label className="checkbox-inline">
          <input placeholder="Prenumele"
          /> 
        </label><br /><br />
        <label className="checkbox-inline">
          <input placeholder="Contact"
          /> 
        </label><br /><br />
         <label className="checkbox-inline">
          <input placeholder="Adresa de email"
          /> 
        </label> <br /><br />
        <label className="checkbox-inline">
          <input placeholder="Confirma adresa de email"
          /> 
        </label>
    <div className="panel-footer">
      <button type="button" className="btn btn-primary btn-block">Submit</button>
    </div>
  </div>
</div>
  );
}
}

export default FormPage;
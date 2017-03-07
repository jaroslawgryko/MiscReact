var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var DataType = React.createClass({

    // handleSettingsChange: function(e){
    //     e.preventDefault();
    //     var templateType = this.refs.templateType.value;
    //     //this.props.onChangeSettings(templateType);
    //     dispatch(actions.changeDataTemplateType(templateType));
    // },
    render: function() {

      var {dispatch, dataTemplateType} = this.props;

      return (
        <div>
            <select ref="templateType" onChange={()=>{
                var templateType = this.refs.templateType.value;
                dispatch(actions.setDataTemplateType(templateType));
              }}>
              <option value="wybierz">Wybierz szablon</option>
              <option value="jednostki">Jednostki</option>
              <option value="pracownicy">Pracownicy</option>
            </select>
        </div>
      )
    }
});

export default connect (
  (state) => {
    return {
      dataTemplateType: state.dataTemplateType
    }
  }
)(DataType);

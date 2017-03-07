var React = require('react');

var CsvContent = React.createClass({

render: function(){
    var {displayCSV, data, columns, csvErrorsList} = this.props;
    var renderThead = () => {

        var displayErr = (csvErrorsList.length === 0) ? 'thdisplay-none' : '';

        if(displayCSV) {
            return (
                <thead>
                    <tr>
                        <th>Lp.</th>
                        {columns.map(column => <th key={column}>{column}</th>)}
                        <th className={displayErr}>Err.</th>
                    </tr>
                </thead>
            );
        } else {
            return (
                <thead><tr><th>Wskaż plik csv</th></tr></thead>
            );
        }
    };

    var renderTbody = () => {
        if(displayCSV) {
            var displayErr = (csvErrorsList.length === 0) ? 'thdisplay-none' : '';
            var i = 0;
            return (
                <tbody>
                    {data.map(r => <tr key={i++} data={r} >
                        <td>{i}</td>
                        {columns.map(column => <td key={column}>{r[column]}</td>)}
                        <th className={displayErr}>Err.</th>
                    </tr>)}
                </tbody>
            );
        }
    };

    return(
        <div className="row">
            <table>
                {renderThead()}
                {renderTbody()}
            </table>            
        </div>
    );
}

});

module.exports = CsvContent;
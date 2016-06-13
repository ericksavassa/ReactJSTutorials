var ComponenteFormulario = React.createClass({
    getInitialState: function () {
        return {
            placeHolderNombre: this.props.placeHolderNombre,
            txtEtiqueta: this.props.txtEtiqueta,
            txtSaludo: this.props.txtSaludo
        };
    },
    Actualizar: function (event) {
        var valorNombre = this.refs.refNombre.getDOMNode().value;
        this.setState({
            txtSaludo: "Hola " + valorNombre
        });
    },
    render: function () {
        return React.DOM.div({
            className: 'form-group',
            children: [
                React.DOM.label({
                    htmlFor: 'exampleInputEmail1',
                    children: this.state.txtEtiqueta,
                }),
                React.DOM.input({
                    type: "text",
                    className: "form-control",
                    name: "txtNombre",
                    placeholder: this.state.placeHolderNombre,
                    ref: "refNombre",
                    onChange: this.Actualizar
                }),
                (<div ref = "SalidaSaludo" > { this.state.txtSaludo } </div>)
            ]
        });
    }
}); React.render(

    <ComponenteFormulario placeHolderNombre = "nombre"
        txtEtiqueta = "Escribe t&uacute; nombre completo:"
        txtSaludo = "Hola:" />, document.getElementById('formulario'));
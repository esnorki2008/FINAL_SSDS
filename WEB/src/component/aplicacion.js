import React from "react";
import foto from './foto.jpg';
import { Col, Row, Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Cantidad De Unidades Vendidas',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};
class Aplicacion extends React.Component {

    componentWillMount() {

    }


    Contenido = () => {
        return (
            <>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div><h1>Aplicacion De Usuario</h1></div>
                    
                </div>
                <h3>Consulta Con Http Request</h3>
            </>
        );
    };

    render() {
        return (
            <div >
                {   
                    
                    this.Contenido()
                }
            </div>
        );
    }
}
export default Aplicacion;
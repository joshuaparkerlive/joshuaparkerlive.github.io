import React from 'react';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import '../styles/App.css';


class Projects extends React.Component{
    render(){
        return <>
            <Row xs={1} sm={1} md={2}>
                <Col>
                    <h1>Roomber</h1>
                    <p>description</p>
                </Col>
                <Col xs={{order: 'first'}} sm={{order: 'first'}} md={{order: 'last'}}>
                    <h1>Image</h1>
                </Col>

            </Row>
            <Row xs={1} sm={1} md={2}>
                <Col >
                    <h1>Image</h1>
                </Col>
                <Col>
                    <h1>This Website</h1>
                    <p>desctiption</p>
                </Col>
            </Row>
            <Row>

            </Row>
        </>;
    }
}
export default Projects;
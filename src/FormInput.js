import {Button, Form, Container, Card, Row, Col} from "react-bootstrap";
import React, {Component} from "react";
import Swal from "sweetalert2";


export default class FormInput extends Component {

    state = {
        value1: 0,
        value2: 0,
        value3: 0,
        hasil: 0,
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        arrayCheckBox: [],
        operator:[
            '+', '-','*','/'
        ]

    }

    changeValue = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: parseInt(value)
        })
        console.log("INPUT1", this.state.value1)
    }

    toggleChangeCheckbox1 = event => {
        // const {name} = event.target;
        this.setState({
            checkbox1: !this.state.checkbox1,
        });
    }

    toggleChangeCheckbox2 = event => {
        // const {name} = event.target;
        this.setState({
            checkbox2: !this.state.checkbox2,
        });
    }

    toggleChangeCheckbox3 = event => {
        // const {name} = event.target;
        this.setState({
            checkbox3: !this.state.checkbox3,
        });
    }

    add = () => {
    const {value1, value2, value3, checkbox1, checkbox2,checkbox3, arrayCheckBox} = this.state
        if (checkbox1) {
          arrayCheckBox.push(1)
        }
        if (checkbox2) {
            arrayCheckBox.push(1)
        }
        if (checkbox3) {
           arrayCheckBox.push(1)
        }
        if (arrayCheckBox.length === 0) {
            Swal.fire("Gagal", "Anda belum checklist", "error")
        } else if (arrayCheckBox.length === 1) {
            Swal.fire("Gagal", "Mohon, checklist satu lagi", "error")
        } else if(arrayCheckBox.length === 2){
            if(value1 && value2 && !value3) {
                this.setState({
                    hasil: value1 + value2
                })
            } else if(value1 && value3 && !value2) {
                this.setState({
                    hasil: value1 + value3
                })
            } else {
                this.setState({
                    hasil: value2 + value3
                })
            }
        } else {
            this.setState({
                hasil: value1 + value2 + value3
            })
        }
        this.setState({
            arrayCheckBox: []
        })


    }

    //pengurangan
    substract = () => {
        const {value1, value2, value3} = this.state
        this.setState({
            hasil: value1 - value2 - value3
        })
    }

    multiply = () => {
        const {value1, value2, value3} = this.state
        this.setState({
            hasil: value1 * value2 * value3
        })
    }

    divide = () => {
        const {value1, value2, value3} = this.state
        this.setState({
            hasil: Math.ceil(value1 / value2 / value3)
        })
    }


    render() {
        const {value1, value2, value3, hasil, checkbox1, checkbox2, checkbox3} = this.state
        return (
            <Container>
                <Card style={{marginTop: '80px'}}>
                    <h3 style={{marginTop: '20px', fontFamily: 'sans-serif', fontWeight: 'bold'}}>Simple Calculator</h3>
                    <Card.Body style={{marginTop: '30px', justifyContent: 'center'}}>
                        <Form style={{width: '70%', margin: '10px'}}>
                            <Row style={{marginBottom: '13px'}}>
                                <Col md={10}>
                                    <Form.Group controlId="input1">
                                        <Form.Control type="number" name="value1" value={value1}
                                                      onChange={event => this.changeValue(event)}/>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group controlId="checkbox1">
                                        <Form.Check type="checkbox"
                                                    onChange={this.toggleChangeCheckbox1} name="checkbox1"
                                                    value={checkbox1}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: '13px'}}>
                                <Col md={10}>
                                    <Form.Group controlId="input2">
                                        <Form.Control type="number" name="value2" value={value2}
                                                      onChange={event => this.changeValue(event)}/>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group controlId="checkbox2">
                                        <Form.Check type="checkbox" onChange={this.toggleChangeCheckbox2}
                                                    name="checkbox2" value={checkbox2}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: '13px'}}>
                                <Col md={10}>
                                    <Form.Group controlId="input3">
                                        <Form.Control type="number" name="value3" value={value3}
                                                      onChange={event => this.changeValue(event)}/>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group controlId="checkbox3">
                                        <Form.Check type="checkbox" onChange={this.toggleChangeCheckbox3}
                                                    name="checkbox3" value={checkbox3}/>
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Button variant="outline-dark" className="float-left" style={{marginRight: '20px'}}
                                    onClick={this.add}>
                                +
                            </Button>
                            <Button variant="outline-dark" className="float-lg-left" style={{marginRight: '20px'}}
                                    onClick={this.substract}>
                                -
                            </Button>
                            <Button variant="outline-dark" className="float-lg-left" style={{marginRight: '20px'}}
                                    onClick={this.multiply}>
                                x
                            </Button>
                            <Button variant="outline-dark" className="float-lg-left" style={{marginRight: '20px'}}
                                    onClick={this.divide}>
                                /
                            </Button>


                        </Form>
                    </Card.Body>
                    <hr style={{width: '70%', marginLeft: '10px'}}/>
                    <Row>
                        <Col md={3}>
                            <h3 style={{textAlign: 'center', marginBottom: '40px', fontFamily: 'cursive'}}>Hasil</h3>
                        </Col>
                        <Col md={9}>
                            <h3 style={{fontFamily: 'cursive'}}>{hasil}</h3>
                        </Col>
                    </Row>
                </Card>
            </Container>
        )
    }
}


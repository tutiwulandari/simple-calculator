import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";

function Calculator() {
    const [nilai, setNilai] = useState({})
    const [checkbox, setCheckbox] = useState({
        pertama: false,
        kedua: false,
        ketiga: false
    })

    const [hasil, setHasil] = useState(0)

    const handleChange = (event) => {
        nilai[event.target.name] = event.target.value;
        setNilai(nilai)
    }

    const handleCheckBox = (event) => {
        checkbox[event.target.name] = event.target.checked;
        setCheckbox(checkbox);
    }

    const handleClick = (event) => {
        event.preventDefault();
        let jumlahChecked = 0
        let arrayNilaiChecked = []

        for (const key in checkbox) {
            if (checkbox[key]) {
                jumlahChecked++
                nilai[key] = nilai[key] || 0
                arrayNilaiChecked.push(+nilai[key])
            }
        }
        if (jumlahChecked < 2) {
            setHasil(false)
        } else {
            let temp = arrayNilaiChecked[0]
            if (event.target.name === 'tambah') {
                arrayNilaiChecked.forEach((e, index) => index > 0 ? temp = temp + e : false)
            } else if (event.target.name === 'kurang') {
                arrayNilaiChecked.forEach((e, index) => index > 0 ? temp = temp - e : false)
            } else if (event.target.name === 'bagi') {
                arrayNilaiChecked.forEach((e, index) => index > 0 ? temp = Math.ceil(temp / e) : false)
            } else if (event.target.name === 'kali') {
                arrayNilaiChecked.forEach((e, index) => index > 0 ? temp = temp * e : false)
            }
            setHasil(temp)
        }
    }


        return (
            <Container>
                <Card style={{marginTop: '80px'}}>
                    <h3 style={{marginTop: '20px', fontFamily: 'sans-serif', fontWeight: 'bold'}}>Simple Calculator</h3>
                    <Card.Body style={{marginTop: '30px', justifyContent: 'center'}}>
                        <Form style={{width: '70%', margin: '10px'}}>
                            <Row style={{marginBottom: '13px'}}>
                                <Col md={10}>
                                    <Form.Group controlId="pertama">
                                        <Form.Control type="number" name="pertama"
                                                      onChange={event => handleChange(event)}/>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group controlId="pertama">
                                        <Form.Check type="checkbox"
                                                    name="pertama"
                                                    onChange={event => handleCheckBox(event)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: '13px'}}>
                                <Col md={10}>
                                    <Form.Group controlId="kedua">
                                        <Form.Control type="number" name="kedua"
                                                      onChange={event => handleChange(event)}/>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group controlId="kedua">
                                        <Form.Check type="checkbox"
                                                    name="kedua"
                                                    onChange={event => handleCheckBox(event)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: '13px'}}>
                                <Col md={10}>
                                    <Form.Group controlId="ketiga">
                                        <Form.Control type="number" name="ketiga"
                                                      onChange={event => handleChange(event)}/>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group controlId="ketiga">
                                        <Form.Check type="checkbox"
                                                    name="ketiga"
                                                    onChange={event => handleCheckBox(event)}/>
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Button variant="outline-dark" className="float-left" style={{marginRight: '20px'}}
                                    name="tambah" onClick={event => handleClick(event)}> + </Button>
                            <Button variant="outline-dark" className="float-lg-left" style={{marginRight: '20px'}}
                                    name="kurang" onClick={event => handleClick(event)}>
                                -
                            </Button>
                            <Button variant="outline-dark" className="float-lg-left" style={{marginRight: '20px'}}
                                    name="kali" onClick={event => handleClick(event)}>
                                x
                            </Button>
                            <Button variant="outline-dark" className="float-lg-left" style={{marginRight: '20px'}}
                                    name="bagi" onClick={event => handleClick(event)}>
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
                            <h3 style={{fontFamily: 'cursive'}}>
                                {hasil !== false && (<p  className='fw-bold text-light fs-3 wh-100' /> )}{hasil}
                               </h3>
                            {hasil === false && (<div className="wh-100 alert alert-danger text-wrap fw-bold">Error! minimum checked box is 2</div>)}
                        </Col>
                    </Row>
                </Card>
            </Container>
        )
    }

    export default Calculator;

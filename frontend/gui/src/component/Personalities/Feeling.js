import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Card } from 'react-bootstrap';
import Section5 from '../image/Section5.gif';


const marks = [{ value: 1 }, { value: 2 }, { value: 3 }];


class Feeling extends Component {
    state = {
        F1: 1,
        F2: 1,
        F3: 1,
        F4: 1

    }

    handleExtraversion = name => (event, newValue) => {
        if (name === "Feeling1") {
            this.setState({
                F1: newValue
            })

        }
        else if (name === "Feeling2") {
            this.setState({
                F2: newValue
            })
        }
        else if (name === "Feeling3") {
            this.setState({
                F3: newValue
            })
        }
        else if (name === "Feeling4") {
            this.setState({
                F4: newValue
            })
        }

    }
    handleArray = () => {
        const ExtraArray = [this.state.F1, this.state.F2, this.state.F3, this.state.F4]
        this.props.parentCallback(ExtraArray);
        this.refs.btn.setAttribute("disabled", "disabled");
    }


    render() {
        const mystyle = {
            color: "black",
            shadow: "10px",
            fontFamily: "Arial",

        };
        return (

            <div>

                <Card className="m-5 shadow-lg bg-white rounded" style={mystyle}>
                    <div class="row no-gutters" style={{ alignItems: 'center' }}>
                        <div class="col-4">
                            <img src={Section5} class="img-fluid" alt="" />
                            <div class="carousel-caption">
                                <h1>Section 5</h1>
                            </div>
                        </div>
                        <div class="col-8" style={{ padding: '10px' }}>
                            <div class="card-block px-2">
                                <Typography id="Feeling1" gutterBottom>
                                    <h4>Q1. Making decisions in an impresonal way, using logical reasoning is beneficial</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Feeling1"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Feeling1")}
                                />

                                <Typography id="Feeling2" gutterBottom>
                                    <h4>Q2. I value Justice and fairness</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Feeling2"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Feeling2")}
                                />

                                <Typography id="Feeling3" gutterBottom>
                                    <h4>Q3. Finding the flaws in an argument is an enjoyable for me</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Feeling3"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Feeling3")}
                                />

                                <Typography id="Feeling4" gutterBottom>
                                    <h4>Q4. I describe myself as reasonable and level-headed</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Feeling4"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Feeling4")}
                                />
                                <br />
                            </div>
                        </div>
                    </div>

                    <div class="card-footer w-100 text-muted"  >
                        <Button ref='btn' tyle={{ alignSelf: "center" }} onClick={this.handleArray}>Submit</Button>
                    </div>
                </Card>


            </div>
        );
    }
}
export default Feeling;
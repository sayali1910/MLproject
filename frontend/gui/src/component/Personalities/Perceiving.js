import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Card } from 'react-bootstrap';
import Section8 from '../image/Section8.gif';

const marks = [{ value: 1 }, { value: 2 }, { value: 3 }];


class Perceiving extends Component {
    state = {
        P1: 1,
        P2: 1,
        P3: 1,
        P4: 1

    }

    handleExtraversion = name => (event, newValue) => {
        if (name === "Perceiving1") {
            this.setState({
                P1: newValue
            })

        }
        else if (name === "Perceiving2") {
            this.setState({
                P2: newValue
            })
        }
        else if (name === "Perceiving3") {
            this.setState({
                P3: newValue
            })
        }
        else if (name === "Perceiving4") {
            this.setState({
                P4: newValue
            })
        }

    }
    handleArray = () => {
        const ExtraArray = [this.state.P1, this.state.P2, this.state.P3, this.state.P4]
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
                            <img src={Section8} class="img-fluid" alt="Section 8" />
                            <div class="carousel-caption">
                                <h1>Section 8</h1>
                            </div>
                        </div>
                        <div class="col-8" style={{ padding: '10px' }}>
                            <div class="card-block px-2">
                                <Typography id="Perceiving1" gutterBottom>
                                    <h4>Q1. I prefer to leave your options open</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Perceiving1"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Perceiving1")}
                                />

                                <Typography id="Perceiving2" gutterBottom>
                                    <h4>Q2. I prefer to see rules and deadlines as flexible</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Perceiving2"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Perceiving2")}
                                />

                                <Typography id="Perceiving3" gutterBottom>
                                    <h4>Q3.I like to improvise myself and make things as I go</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Perceiving3"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Perceiving3")}
                                />

                                <Typography id="Perceiving2" gutterBottom>
                                    <h4>Q4. I like for being spontaneous person and enjoy surprises and new situations</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Perceiving3"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Perceiving3")}
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
export default Perceiving;
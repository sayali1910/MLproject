import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Card } from 'react-bootstrap';
import Section6 from '../image/Section6.gif';

const marks = [{ value: 1 }, { value: 2 }, { value: 3 }];


class Thinking extends Component {
    state = {
        T1: 1,
        T2: 1,
        T3: 1,
        T4: 1

    }

    handleExtraversion = name => (event, newValue) => {
        if (name === "Thinking1") {
            this.setState({
                T1: newValue
            })

        }
        else if (name === "Thinking2") {
            this.setState({
                T2: newValue
            })
        }
        else if (name === "Thinking3") {
            this.setState({
                T3: newValue
            })
        }
        else if (name === "Thinking4") {
            this.setState({
                T4: newValue
            })
        }

    }
    handleArray = () => {
        const ExtraArray = [this.state.T1, this.state.T2, this.state.T3, this.state.T4]
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
                            <img src={Section6} class="img-fluid" alt="Section 6" />
                            <div class="carousel-caption">
                                <h1>Section 6</h1>
                            </div>
                        </div>
                        <div class="col-8" style={{ padding: '10px' }}>
                            <div class="card-block px-2">
                                <Typography id="Thinking1" gutterBottom>
                                    <h4>Q1. I mind how my actions affect others</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Thinking1"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Thinking1")}
                                />

                                <Typography id="Thinking2" gutterBottom>
                                    <h4>Q2. I value harmony and forgiveness</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Thinking2"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Thinking2")}
                                />

                                <Typography id="Thinking3" gutterBottom>
                                    <h4>Q3. I like to please others and point out the best in people</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Thinking3"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Thinking3")}
                                />

                                <Typography id="Thinking4" gutterBottom>
                                    <h4>Q4. I describe myself as warm and empathetic person</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Thinking4"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Thinking4")}
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
export default Thinking;
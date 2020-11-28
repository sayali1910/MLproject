import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Card } from 'react-bootstrap';
import Section3 from '../image/Section3.gif';


const marks = [{ value: 1 }, { value: 2 }, { value: 3 }];


class Sensing extends Component {
    state = {
        S1: 1,
        S2: 1,
        S3: 1,
        S4: 1

    }

    handleExtraversion = name => (event, newValue) => {
        if (name === "Sensing1") {
            this.setState({
                S1: newValue
            })

        }
        else if (name === "Sensing2") {
            this.setState({
                S2: newValue
            })
        }
        else if (name === "Sensing3") {
            this.setState({
                S3: newValue
            })
        }
        else if (name === "Sensing4") {
            this.setState({
                S4: newValue
            })
        }

    }
    handleArray = () => {
        const ExtraArray = [this.state.S1, this.state.S2, this.state.S3, this.state.S4]
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
                            <img src={Section3} class="img-fluid" alt="Section 3" />
                            <div class="carousel-caption">
                                <h1>Section 3</h1>
                            </div>
                        </div>
                        <div class="col-8" style={{ padding: '10px' }}>
                            <div class="card-block px-2">
                                <Typography id="Sensing1" gutterBottom>
                                    <h4>Q1. I Focus on the reality of how things work </h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Sensing1"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Sensing1")}
                                />

                                <Typography id="Sensing2" gutterBottom>
                                    <h4>Q2. I pay attention on concrete facts and details</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Sensing2"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Sensing2")}
                                />

                                <Typography id="Sensing3" gutterBottom>
                                    <h4>Q3. I prefer ideas that have practical applications</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Sensing3"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Sensing3")}
                                />

                                <Typography id="Sensing4" gutterBottom>
                                    <h4>Q4. I like to describe things in a specific, literal way</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Sensing4"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Sensing4")}
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
export default Sensing;
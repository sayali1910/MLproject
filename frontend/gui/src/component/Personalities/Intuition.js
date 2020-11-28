import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Card } from 'react-bootstrap';
import Section4 from '../image/Section4.gif';

const marks = [{ value: 1 }, { value: 2 }, { value: 3 }];


class Intuition extends Component {
    state = {
        I1: 1,
        I2: 1,
        I3: 1,
        I4: 1

    }

    handleExtraversion = name => (event, newValue) => {
        if (name === "Intuition1") {
            this.setState({
                I1: newValue
            })

        }
        else if (name === "Intuition2") {
            this.setState({
                I2: newValue
            })
        }
        else if (name === "Intuition3") {
            this.setState({
                I3: newValue
            })
        }
        else if (name === "Intuition4") {
            this.setState({
                I4: newValue
            })
        }

    }
    handleArray = () => {
        const ExtraArray = [this.state.I1, this.state.I2, this.state.I3, this.state.I4]
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
                            <img src={Section4} class="img-fluid" alt="Section 4" />
                            <div class="carousel-caption">
                                <h1 style={{ color: "black" }}>Section 4</h1>
                            </div>
                        </div>
                        <div class="col-8" style={{ padding: '10px' }}>
                            <div class="card-block px-2">
                                <Typography id="Intuition1" gutterBottom>
                                    <h4>Q1. I imagine the possibilities of how things could be</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Intuition1"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Intuition1")}
                                />

                                <Typography id="Intuition2" gutterBottom>
                                    <h4>Q2.I the big picture, see how everything connects</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Intuition2"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Intuition2")}
                                />

                                <Typography id="Intuition3" gutterBottom>
                                    <h4>Q3.It is fine to enjoy ideas and concepts for our own sake</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Intuition3"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Intuition3")}
                                />

                                <Typography id="Intuition4" gutterBottom>
                                    <h4>Q4. I like to describe things in a figurative, poetic way</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Intuition4"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Intuition4")}
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
export default Intuition;
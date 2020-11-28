import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Card } from 'react-bootstrap';

import Section2 from '../image/Section2.gif';

const marks = [{ value: 1 }, { value: 2 }, { value: 3 }];


class Introversion extends Component {
    state = {
        In1: 1,
        In2: 1,
        In3: 1,
        In4: 1

    }

    handleExtraversion = name => (event, newValue) => {
        if (name === "Introversion1") {
            this.setState({
                In1: newValue
            })

        }
        else if (name === "Introversion2") {
            this.setState({
                In2: newValue
            })
        }
        else if (name === "Introversion3") {
            this.setState({
                In3: newValue
            })
        }
        else if (name === "Introversion4") {
            this.setState({
                In4: newValue
            })
        }

    }
    handleArray = () => {
        const ExtraArray = [this.state.In1, this.state.In2, this.state.In3, this.state.In4]
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
                            <img src={Section2} class="img-fluid" alt="Section 2" />
                            <div class="carousel-caption">
                                <h1>Section 2</h1>
                            </div>
                        </div>
                        <div class="col-8" style={{ padding: '10px' }}>
                            <div class="card-block px-2">
                                <Typography id="Introversion1" gutterBottom>
                                    <h4>Q1. I prefer a slower pace with time for contemplation</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Introversion1"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Introversion1")}
                                />

                                <Typography id="Introversion2" gutterBottom>
                                    <h4>Q2. Describing as reserved or private is right way of doing so</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Introversion2"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Introversion2")}
                                />

                                <Typography id="Introversion3" gutterBottom>
                                    <h4>Q3. I tend to think things through inside my head</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Introversion3"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Introversion3")}
                                />

                                <Typography id="Introversion4" gutterBottom>
                                    <h4>Q4. It is fine to focus on center of attention rathar than observation</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Introversion4"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Introversion4")}
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
export default Introversion;
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Card } from 'react-bootstrap';
import Section1 from '../image/Section1.gif';

const marks = [{ value: 1 }, { value: 2 }, { value: 3 }];


class Extraversion extends Component {
    state = {
        EQ1: 1,
        EQ2: 1,
        EQ3: 1,
        EQ4: 1

    }

    handleExtraversion = name => (event, newValue) => {
        if (name === "Extraversion1") {
            this.setState({
                EQ1: newValue
            })

        }
        else if (name === "Extraversion2") {
            this.setState({
                EQ2: newValue
            })
        }
        else if (name === "Extraversion3") {
            this.setState({
                EQ3: newValue
            })
        }
        else if (name === "Extraversion4") {
            this.setState({
                EQ4: newValue
            })
        }

    }
    handleArray = () => {
        const ExtraArray = [this.state.EQ1, this.state.EQ2, this.state.EQ3, this.state.EQ4]
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
                            <img src={Section1} class="img-fluid" alt="" />
                            <div class="carousel-caption">
                                <h1>Section 1</h1>
                            </div>
                        </div>
                        <div class="col-8" style={{ padding: '10px' }}>
                            <div class="card-block px-2">
                                <Typography id="Extraversion1" gutterBottom>
                                    <h4>Q1. I describe myself as talkative and outgoing</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}
                                    aria-labelledby="Extraversion1"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Extraversion1")}
                                />

                                <Typography id="Extraversion2" gutterBottom>
                                    <h4>Q2.I like to live in fast-paced enviroment</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Extraversion2"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Extraversion2")}
                                />

                                <Typography id="Extraversion3" gutterBottom>
                                    <h4>Q3.I tend to work out ideas with others</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Extraversion3"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Extraversion3")}
                                />

                                <Typography id="Extraversion4" gutterBottom>
                                    <h4>Q4.I like to see myself as center of attention</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Extraversion4"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Extraversion4")}
                                />
                                <br />

                            </div>
                        </div>

                    </div>

                    <div class="card-footer w-100 text-muted"  >
                        <Button ref='btn' tyle={{ alignSelf: "center" }} onClick={this.handleArray}>Submit</Button>
                    </div>
                </Card>

            </div >
        );
    }
}
export default Extraversion;
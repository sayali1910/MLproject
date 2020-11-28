import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Card } from 'react-bootstrap';
import Section7 from '../image/Section7.gif';


const marks = [{ value: 1 }, { value: 2 }, { value: 3 }];


class Judging extends Component {
    state = {
        J1: 1,
        J2: 1,
        J3: 1,
        J4: 1

    }

    handleExtraversion = name => (event, newValue) => {
        if (name === "Judging1") {
            this.setState({
                J1: newValue
            })

        }
        else if (name === "Judging2") {
            this.setState({
                J2: newValue
            })
        }
        else if (name === "Judging3") {
            this.setState({
                J3: newValue
            })
        }
        else if (name === "Judging4") {
            this.setState({
                J4: newValue
            })
        }

    }
    handleArray = () => {
        const ExtraArray = [this.state.J1, this.state.J2, this.state.J3, this.state.J4]
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
                            <img src={Section7} class="img-fluid" alt="Section 7" />
                            <div class="carousel-caption">
                                <h1>Section 7</h1>
                            </div>
                        </div>
                        <div class="col-8" style={{ padding: '10px' }}>
                            <div class="card-block px-2">
                                <Typography id="Judging1" gutterBottom>
                                    <h4>Q1. I prefer to have matters settled</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Judging1"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Judging1")}
                                />

                                <Typography id="Judging2" gutterBottom>
                                    <h4>Q2. I think rules and deadlines should be resepected by us</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Judging2"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Judging2")}
                                />

                                <Typography id="Judging3" gutterBottom>
                                    <h4>Q3. I prefer to have detailed, step-by-step instructions</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Judging3"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Judging3")}
                                />

                                <Typography id="Judging4" gutterBottom>
                                    <h4>Q4. Is it fine to make plans, Want to know what you're getting into</h4>
                                </Typography>
                                <Slider
                                    defaultValue={1}

                                    aria-labelledby="Judging4"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={marks}
                                    min={1}
                                    max={3}
                                    onChange={this.handleExtraversion("Judging4")}
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
export default Judging;
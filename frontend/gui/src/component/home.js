import React, { Component } from 'react';
import axios from 'axios';
import * as settings from '../settings';
import Extraversion from './Personalities/Extraversion';
import Introversion from './Personalities/Introversion';
import Sensing from './Personalities/Sensing';
import Feeling from './Personalities/Feeling';
import Intuition from './Personalities/Intuition';
import Judging from './Personalities/Judging';
import Perceiving from './Personalities/Perceiving';
import Thinking from './Personalities/Thinking';
import { Card, Jumbotron } from 'react-bootstrap';
import JumboImage from './image/JumboImage.jpg';
import { Container, Grid, Paper, Typography, Slider, Button } from '@material-ui/core';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Eval: 1,
            Inval: 1,
            Sval: 1,
            Ival: 1,
            Tval: 1,
            Fval: 1,
            Jval: 1,
            Pval: 1,
            prediction: "",
            jobPrediction: "",
            description: ""
        };
    }

    handleExtaCallback = (childData) => {

        this.setState({ Eval: this.handleHighest(childData) }, () => {
            console.log(this.state.Eval, 'dealersOverallTotal1');
        });


    }

    handleIntroCallback = (childData) => {

        this.setState({ Inval: this.handleHighest(childData) }, () => {
            console.log(this.state.Inval, 'dealersOverallTotal1');
        });


    }

    handleSenCallback = (childData) => {

        this.setState({ Sval: this.handleHighest(childData) }, () => {
            console.log(this.state.Sval, 'dealersOverallTotal1');
        });


    }

    handleICallback = (childData) => {

        this.setState({ Ival: this.handleHighest(childData) }, () => {
            console.log(this.state.Ival, 'dealersOverallTotal1');
        });


    }

    handleTalkCallback = (childData) => {

        this.setState({ Tval: this.handleHighest(childData) }, () => {
            console.log(this.state.Tval, 'dealersOverallTotal1');
        });


    }

    handleFCallback = (childData) => {

        this.setState({ Fval: this.handleHighest(childData) }, () => {
            console.log(this.state.Fval, 'dealersOverallTotal1');
        });


    }

    handleJCallback = (childData) => {

        this.setState({ Jval: this.handleHighest(childData) }, () => {
            console.log(this.state.Jval, 'dealersOverallTotal1');
        });


    }

    handlePCallback = (childData) => {

        this.setState({ Pval: this.handleHighest(childData) }, () => {
            console.log(this.state.Pval, 'dealersOverallTotal1');
        });


    }

    handleHighest = (arr1) => {
        let mf = 1;
        let m = 0;
        let item;
        for (let i = 0; i < arr1.length; i++) {
            for (let j = i; j < arr1.length; j++) {
                if (arr1[i] == arr1[j])
                    m++;
                if (mf < m) {
                    mf = m;
                    item = arr1[i];
                }
            }
            m = 0;
        }
        return item;
    }

    handlePredict = event => {
        // Submit Iris Flower measured dimensions as form data
        let PersonalityFormData = new FormData();
        PersonalityFormData.append("Extraversion", this.state.Eval);
        PersonalityFormData.append("Introversion", this.state.Inval);
        PersonalityFormData.append("Sensing", this.state.Sval);
        PersonalityFormData.append("Intuition", this.state.Ival);
        PersonalityFormData.append("Thinking", this.state.Tval);
        PersonalityFormData.append("Feeling", this.state.Fval);
        PersonalityFormData.append("Judging", this.state.Jval);
        PersonalityFormData.append("Perceiving", this.state.Pval);

        //Axios variables required to call the predict APIPerceiving
        let headers = { 'Authorization': `Token ${this.props.token}` };
        let url = settings.API_SERVER + '/api/predict/';
        let method = 'post';
        let config = { headers, method, url, data: PersonalityFormData };

        //Axios predict API call
        axios(config).then(
            res => {
                this.setState({
                    prediction: res.data["Prediced personality"],
                    description: res.data["Description"]
                })

            }).catch(
                error => { alert(error) })

    }
    handleJob = event => {
        let JobFormData = new FormData();
        JobFormData.append("age", 25);
        JobFormData.append("personality", this.state.prediction);
        let headers = { 'Authorization': `Token ${this.props.token}` };
        let url = settings.API_SERVER + '/api/predictjob/';
        let method = 'post';
        let config = { headers, method, url, data: JobFormData };

        //Axios predict API call
        axios(config).then(
            res => {
                this.setState({
                    jobPrediction: res.data["Predicted job"]
                })

            }).catch(
                error => { alert(error) })
    }
    render() {
        const mystyle = {

            alignItems: "center",

        }

        return (
            <div style={mystyle} >

                <div className="jumbotron text-white jumbotron-image shadow" style={{ backgroundImage: `url(${JumboImage})`, padding: "0px" }}>
                    <div style={{ backgroundColor: "black", opacity: "0.7", padding: "20px" }}>
                        <h1>Personality Prediction test</h1>
                        <h3>Data Mining and Warehousing Project</h3>
                        <br />
                        <p>
                            In this project we used 3 different classification algorithm to classify 16 different Personalities
                            <br /><br />
                            16 perosnalities: ISTJ ,ISFJ ,INFJ ,INTJ ,ISTP ,ISFP ,INFP ,INTP ,ESTP ,ESFP ,ENFP ,ENTP ,ESTJ ,ESFJ ,ENFJ ,ENTJ
                            <br /><br />
                            Classification Techniques: Random Forest Classifier , KNN , Svm
                        </p>

                    </div>
                </div>

                <Extraversion
                    parentCallback={this.handleExtaCallback}
                />
                <Introversion
                    parentCallback={this.handleIntroCallback}
                />
                <Sensing
                    parentCallback={this.handleSenCallback}
                />
                <Intuition
                    parentCallback={this.handleICallback}
                />
                <Feeling
                    parentCallback={this.handleFCallback}
                />
                <Thinking
                    parentCallback={this.handleTalkCallback}
                />
                <Judging
                    parentCallback={this.handleJCallback}
                />
                <Perceiving
                    parentCallback={this.handlePCallback}
                />



                <Card className="m-5" style={{ padding: '50px' }}>
                    <Button variant="contained" color="primary" onClick={this.handlePredict}>
                        Predict
                </Button>
                    <br />
                    <Typography variant="caption" display="inline">
                        <h2>Predicted personality: </h2><span>&nbsp;</span>
                    </Typography>
                    <Typography variant="body1" display="inline">
                        {this.state.prediction}
                        <br />
                        <h3>Description: </h3>
                        {this.state.description}
                    </Typography>
                </Card>

                <Card className="m-5" style={{ padding: '50px' }}>
                    <Button variant="contained" color="primary" onClick={this.handleJob}>
                        Predict Job
                </Button>
                    <br />
                    <Typography variant="caption" display="inline">
                        <h2>Predicted Job: </h2><span>&nbsp;</span>
                    </Typography>
                    <Typography variant="body1" display="inline">
                        {this.state.jobPrediction}
                    </Typography>
                </Card>
            </div >

        );
    }
}
export default Home;
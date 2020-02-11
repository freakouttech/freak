import React, { Component } from 'react';
import {
	Container,
	Row,
	Card,
	CardText,
  	CardSubtitle,
  	Button,
 } from 'reactstrap';

 import './Scanner.css';

class Scanner extends React.Component<{}, any> {
    private zXing: any;
    constructor(props: any) {
      super(props)
      this.state = {
        delay: 500,
        result: 'No result',
      }
 
      this.zXing = new window.ZXing.BrowserQRCodeReader();
    }
    componentDidMount() {
    	this.zXing.getVideoInputDevices()
    		.then((videoInputDevices: any) => {
	
    		    videoInputDevices.forEach((element: any) => {
    		    	console.log(element)
    		        console.log(`${element.label}, ${element.deviceId}`)            
    		    })

    		    this.zXing.decodeFromInputVideoDevice(videoInputDevices.label, 'videoTwo')
    		        .then((result: any) => {
    		        	console.log(result);
    		            console.log(result.text)
    		            this.handleScan(result.text)

    		        }).catch((error: any) => {
    		            console.error(error)
    		        })
    		})
    		.catch((err: any) => {
    		    console.error(err)
    		})

    }
    handleScan = (result:any) => {
      if(result){
        this.setState({ result })
        this.zXing.reset();
      }
    }
    handleError = (err:any) => {
      console.error(err)
    }
    render(){
      const previewStyle = {
        height: 240,
        width: 320,
        display: "inline",
      }
 
      return(
        <div className="scanner-container">
          <br />
          <video id="videoTwo" width="300" height="200" style={{border: "1px solid gray"}}></video>
          <br />
          <p className="scanner-results">{this.state.result}</p>
        </div>
      )
    }
 }


export default Scanner;
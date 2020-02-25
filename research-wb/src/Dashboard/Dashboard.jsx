import React from 'react';
import Iframe from 'react-iframe'

export default class Dashboard extends React.Component{
    

    componentDidMount(){
    }

    render(){
        return (
            <div>
                <Iframe src="https://search-evokerb-c4pasf6ebotkehmtqwin3ovhgu.us-east-2.es.amazonaws.com/_plugin/kibana/app/kibana#/dashboard/53726840-580c-11ea-b552-5171c403214e?embed=true&_g=()" height="1000" width="1600"></Iframe>
            </div>
        );
    }
}
import React from 'react';
import Iframe from 'react-iframe'

export default class Dashboard extends React.Component{
    

    componentDidMount(){
    }

    render(){
        return (
            <div>
                <Iframe src="https://search-evokerb-c4pasf6ebotkehmtqwin3ovhgu.us-east-2.es.amazonaws.com/_plugin/kibana/app/kibana#/dashboard/525e83d0-4ee3-11ea-b552-5171c403214e?embed=true&_g=(filters%3A!())" height="900" width="1400"></Iframe>
            </div>
        );
    }
}
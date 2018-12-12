import React, {Fragment} from 'react';

export default class Game extends React.Component{
    render(){
    	return(
            <Fragment><h4>{this.props.tip}</h4> <br/></Fragment>
    	)

    }

}
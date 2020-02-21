import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export class Cards extends Component {     
    render() {     
      const divStyle = {
      margin:"30px"    
      };  
           
        return (
          <div style={divStyle} >
            <Card >
              <CardActionArea>              
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {this.props.description} <br/>                      
                      {this.props.status} - {this.props.dueDate}<br/>
                      {this.props.responsible}
                    </Typography>                 
                </CardContent>
              </CardActionArea>         
            </Card>
          </div>
          
  );
}


}
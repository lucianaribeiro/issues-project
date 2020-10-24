import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const CardComponent = (props) => {

    const classes = useStyles();

    return(
       <Wrapper>
           <Card>
               <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography className={classes.description}>
                        {props.description}
                    </Typography>
               </CardContent>
               <CardActions>
                   <Button>See More</Button>
               </CardActions>
           </Card>
       </Wrapper>
    );


}

const Wrapper = styled.div `
    width: 15%;
`;

const useStyles = makeStyles({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
    }
})


export default CardComponent;
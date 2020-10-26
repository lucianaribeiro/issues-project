import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const CardComponent = (props) => {

    const issue = props.issue;
    const newColor = issue.number % 2 === 0 ? "#d9f2ff" : "#ffeed9";
    const data = { color: newColor }
    const classes = useStyles(data);
    const labels = () => {
        return issue.labels.map(label => {
            return (
                <LabelsWrapper labelColor={label.color}>
                    <Typography className={classes.label}>
                        {label.name}
                    </Typography>
                </LabelsWrapper>
            );
        })
    }

    console.log("newColor", newColor)
    return (
        <Wrapper>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.number}>
                        {`#${issue.number}`}
                    </Typography>
                    <Typography className={classes.title} gutterBottom>
                        {issue.title}
                    </Typography>
                    <Labels>
                        {labels()}
                    </Labels>
                </CardContent>
            </Card>
        </Wrapper>
    );


}

const Wrapper = styled.div`
    width: 500px;
    margin: 10px;
`;

const LabelsWrapper = styled.div`
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    margin: 5px;
    background-color: ${props => `#${props.labelColor}`};
    border-radius: 10px;
    margin-top: 10px;
`;

const Labels = styled.div``;

const useStyles = makeStyles({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    description: {
        fontSize: 16,
    },
    number: {
        color: 'grey',
    },
    cardContent: {
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    card: data => ({
        // display: 'flex',
        backgroundColor: data.color
    }),
    button: {
        color: blue.A400,
    }
})


export default CardComponent;
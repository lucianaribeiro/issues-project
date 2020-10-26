import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const CardComponent = (props) => {

    const issue = props.issue;
    const newColor = issue.number % 2 === 0 ? "#d9f2ff" : "#d9ffe4";
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

    return (
        <Wrapper>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.number}>
                        {`#${issue.number} ${issue.state}`}
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
    width: 400px;
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
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    number: {
        color: 'grey',
        fontSize: 12,
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
    },
    label: {
        fontSize: 12,
    },
    state: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    }
})


export default CardComponent;
import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

const FilterComponent = ({ callbackFilter}) => {

    const [openStatus, setOpenStatus] = useState(false);
    const [openOrder, setOpenOrder] = useState(false);
    const [openLabel, setOpenLabel] = useState(false);
    const [labels, setLabels] = useState([]);
    const [status, setStatus] = useState('');
    const [order, setOrder] = useState('');
    const [label, setLabel] = useState('');
    const classes = useStyles();
    const baseURL = 'https://api.github.com/repos/facebook/react';


    useEffect(() => {
        handleLabels();
    },[])

    const handleClose = () => {
        setOpenStatus(false)
        setOpenOrder(false);
        setOpenLabel(false);
    };

    const handleOpen = (event) => {
        if (event.target.id === 'status') {
            setOpenStatus(true)
        } else if (event.target.id === 'order') {
            setOpenOrder(true)
        } else if (event.target.id === 'label') {
            setOpenLabel(true);
        }

    };

    const handleStatusChange = (event) => {
        const target = event.target;
        setStatus(target.value);
        callbackFilter(target.value, target.name);
    }
    const handleOrderChange = (event) => {
        const target = event.target;
        setOrder(target.value);
        callbackFilter(target.value, target.name);
    }
    const handleLabelChange = (event) => {
        const target = event.target;
        setLabel(target.value);
        callbackFilter(target.value, target.name);
    }

    const handleLabels = () => {
        const OAUTH_TOKEN = '647b84baa6f7277729df53a3fc7e5ebb0c5e0e02'
        const info = {
            method: 'GET',
            headers: new Headers({
                Authorization: `token ${OAUTH_TOKEN}`,
            })
        }

        fetch(`${baseURL}/labels?&per_page=100`, info)
            .then((res) => res.json())
            .then((result) => {
                setLabels(result);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleShowLabels = () => {

        return labels.map(label => {
            return (
                <MenuItem value={label.name}>{label.name}</MenuItem>
            );
        })
    }

    return (
        <FormWrapper>
            <FormControl className={classes.formControl}>
                <InputLabel id='status-label'>By Status</InputLabel>
                <Select
                    labelId='status-label'
                    id='status'
                    open={openStatus}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={status}
                    name='status'
                    onChange={handleStatusChange}
                >
                    <MenuItem value="all">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='open'>Open</MenuItem>
                    <MenuItem value='closed'>Closed</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id='order-label'>By Order</InputLabel>
                <Select
                    labelId='order-label'
                    id='order'
                    open={openOrder}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={order}
                    name='order'
                    onChange={handleOrderChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='desc'>Newer</MenuItem>
                    <MenuItem value='asc'>Older</MenuItem>
                    <MenuItem value='comments'>Most Comments</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id='label-label'>By Labels</InputLabel>
                <Select
                    labelId='label-label'
                    id='label'
                    open={openLabel}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={label}
                    name='label'
                    onChange={handleLabelChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {handleShowLabels()}
                </Select>
            </FormControl>
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    /* margin-bottom: 50px; */
`;

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 200,
    },
}));


export default FilterComponent;
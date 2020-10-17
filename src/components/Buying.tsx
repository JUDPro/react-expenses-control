import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch} from 'react-redux';
import {actions} from '../store';

export interface IBuying {
    name: string;
    cost: number;
}

type BuyingProps = {
    buying: IBuying;
    index: number;
}


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
}));

export const Buying = ({buying, index}: BuyingProps) => {
    const classes = useStyles();
    const [isOpened, setOpened] = useState(false);
    const dispatch = useDispatch();
    return <>
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {buying.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {buying.cost} р.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => dispatch(actions.delete(index))}>Delete</Button>
                <Button size="small" onClick={() => setOpened(true)}>Edit</Button>
            </CardActions>
        </Card>
    </>;
};

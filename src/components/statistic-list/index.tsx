import {FC} from "react";
import {Iprops} from "@/components/statistic-list/statistic-list.type";
import {IstatisticItem} from "@/services/user/user.type";
import {Grid, Typography, Paper, Box} from "@mui/material";

const StatisticList: FC<Iprops> = ({list}) => {

    return (
        <>
        {list.map((item: IstatisticItem) => {
            return <Grid key={item.label} item xs={4} p={2}>
                <Paper elevation={3} sx={{textAlign: 'center'}}>
                    <Typography variant="h5" gutterBottom>
                        {item.label}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {item.value}
                    </Typography>
                </Paper>
            </Grid>
            })}

        </>
    );
};

export default StatisticList;
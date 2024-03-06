'use client';

import {Grid, CircularProgress} from "@mui/material";
import {useProfileData} from "@/hooks/useProfileData";
import StatisticList from "@/components/statistic-list";

const Cabinet = () => {
    const {isLoading, data} = useProfileData();

    return (
       <Grid
           container
           space={3}
       >
           {isLoading
           ? <CircularProgress sx={{margin: '0 auto'}}/>

           : <StatisticList list={data.statistics} />
           }
       </Grid>
    );
};

export default Cabinet;
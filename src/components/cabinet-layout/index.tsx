import {PropsWithChildren} from "react";
import Header from "@/components/cabinet-layout/header/index.";
import Grid from '@mui/material/Grid';
import Sidebar from "@/components/cabinet-layout/sidebar";
const CabinetLayout = ({children}: PropsWithChildren) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
               <Sidebar />
            </Grid>
            <Grid item xs={9}>
                <Header />
                {children}
            </Grid>
        </Grid>
    );
};

export default CabinetLayout;
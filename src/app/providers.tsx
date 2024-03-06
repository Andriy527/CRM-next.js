'use client';

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import {ThemeProvider} from "@mui/material/styles";
import {useState, PropsWithChildren} from "react";
import theme from "@/mui/theme";

const Providers = ({children}: PropsWithChildren) => {
    const [queryClient] = useState(new QueryClient({}))

    return (
        <QueryClientProvider client={queryClient}>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </AppRouterCacheProvider>
        </QueryClientProvider>
    );
};

export default Providers;
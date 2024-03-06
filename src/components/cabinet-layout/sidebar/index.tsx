'use client';

import {Drawer, Toolbar, List, Divider, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {sidebarData} from "@/components/cabinet-layout/sidebar/sidebar.data";
import {usePathname} from "next/navigation";
import Link from 'next/link'


const Sidebar = () => {
    const pathname = usePathname();

    return (
        <Drawer
            sx={{
                width: '100%',
                position: 'relative',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '100%',
                    position: 'relative',
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {sidebarData.map((item) => (
                    <Link key={item.title} href={item.link}>
                    <ListItem selected={pathname === item.link} disablePadding>
                        <ListItemButton>
                                <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
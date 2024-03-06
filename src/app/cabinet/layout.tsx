import {PropsWithChildren} from "react";
import CabinetLayout from "@/components/cabinet-layout";
const Layout = ({children}: PropsWithChildren) => {
    return (
        <CabinetLayout>
            {children}
        </CabinetLayout>
    );
};

export default Layout;
import {useState} from "react";
export const useToogleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return {
        isMenuOpen,
        openMenu,
        closeMenu
    }
}
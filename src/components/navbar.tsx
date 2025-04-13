import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Box, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navLinks = [
        { label: "Home", to: "/#" },
        { label: "Training", to: "/#training" },
        { label: "Coaching", to: "/#coaching" },
        { label: "Categories", to: "/#categories" },
        { label: "Nutrition", to: "/#nutrition" },
    ];

    return (
        <nav>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#1e1a43", padding: "1rem", fontSize: "1rem" }}>
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <img src="/vin.webp" alt="Logo" width="40" height="40" style={{ borderRadius: "50%" }} />
                    <HashLink smooth to="/#" style={{ textDecoration: "none", color: "inherit" }}> <strong>Vinn</strong> </HashLink>
                </Box>

                {/* Desktop Navigation */}
                {!isMobile ? (
                    <Box sx={{ display: "flex", gap: "2rem" }}>
                        {navLinks.map((link) => (
                            <HashLink key={link.label} smooth to={link.to} style={{ textDecoration: "none", color: "inherit" }}>
                                <strong>{link.label}</strong>
                            </HashLink>
                        ))}
                    </Box>
                ) : (
                    // Mobile Menu Button
                    <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                )}
            </Box>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 250 }}>
                    {navLinks.map((link) => (
                        <ListItemButton key={link.label} onClick={handleDrawerToggle}>
                            <HashLink smooth to={link.to} style={{ textDecoration: "none", color: "inherit", width: "100%" }}>
                                <ListItemText primary={link.label} />
                            </HashLink>
                        </ListItemButton >
                    ))}
                </List>
            </Drawer>
        </nav>
    );
}

export default Navbar;

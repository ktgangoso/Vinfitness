import React from 'react'
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
    return (
        <div>
            <footer>
                <Box sx={{ background: "radial-gradient(circle at bottom, rgba(99, 98, 98, 0.3) 10%, black 100%)", color: "white", py: 4 }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            {/* Company Info */}
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" fontWeight="bold">Vinn Fitness</Typography>
                                <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>
                                    Delivering quality services since 2024. Your trusted partner in innovation.
                                </Typography>
                            </Grid>

                            {/* Quick Links */}
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" fontWeight="bold">Quick Links</Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                                    <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}>
                                        About Us
                                    </Link>
                                    <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}>
                                        Services
                                    </Link>
                                    <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}>
                                        Contact
                                    </Link>
                                    <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}>
                                        Privacy Policy
                                    </Link>
                                </Box>
                            </Grid>

                            {/* Social Media */}
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" fontWeight="bold">Follow Us</Typography>
                                <Box sx={{ mt: 1 }}>
                                    <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#1877F2" } }}>
                                        <Facebook />
                                    </IconButton>
                                    <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#1DA1F2" } }}>
                                        <Twitter />
                                    </IconButton>
                                    <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#E4405F" } }}>
                                        <Instagram />
                                    </IconButton>
                                    <IconButton href="#" sx={{ color: "white", "&:hover": { color: "#0077B5" } }}>
                                        <LinkedIn />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>

                        {/* Copyright */}
                        <Box sx={{ textAlign: "center", mt: 4, opacity: 0.7 }}>
                            <Typography variant="body2">© {new Date().getFullYear()} Vinn Fitness. All rights reserved.</Typography>
                        </Box>
                    </Container>
                </Box>

            </footer>
        </div>
    )
}

export default Footer
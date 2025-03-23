import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';

function News() {
    return (
        <div id="nutrition">
            <Box sx={{ backgroundColor: "#fff", color: "#000",  height: "100vh", padding: {xs: "1rem", md: "0"} }}>
                <Box>
                    <Typography sx={{ fontSize: "3rem", textAlign: "center" }}> <strong>Nutrition</strong> </Typography>
                    <Typography sx={{ fontSize: "1.4rem", textAlign: "center" }}>Discover meal plans, diet tips, supplements info and delicious recipes to help improve your sports nutrition.</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: { xs: "column", md: "row" }, padding: "1rem", gap: "2rem", }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <CardMedia 
                        sx={{ height: {xs: "10rem", md: "25rem"}, width: {xs: "10rem", md: "25rem"}}}
                            component="img"
                            image="/img/nutritionnews.webp"
                            alt=""
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around", textAlign: "left", alignItems: "start", flexDirection: "column", gap: "1rem" }}>
                        <Typography sx={{ fontSize: "1rem", fontWeight: "700" }}>HEALTHY FOOD</Typography>
                        <Typography sx={{ fontSize: "2rem", fontWeight: "700" }}>5 High-Protein Foods to Help You Build Strength and Muscle</Typography>
                        <Typography>Including the right protein-rich foods in your diet is essential for muscle growth and overall strength.</Typography>
                        <Button
                            sx={{
                                color: "#000",
                                position: "relative",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    width: "0%",
                                    height: "2px",
                                    bottom: 0,
                                    left: 0,
                                    backgroundColor: "black",
                                    transition: "width 0.5s linear"
                                },
                                "&:hover": {
                                    color: "#333",
                                    borderRadius: "0",
                                    "&::after": {
                                        width: "100%"
                                    }
                                }
                            }}
                        >
                            Read Article
                        </Button>

                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", width: "100%", gap: "1rem" }}>
                    <Typography sx={{ fontSize: "1.3rem", fontWeight: "700" }} >Other Article</Typography>
                    <Divider sx={{ width: "80%", border: "1px solid black" }} />
                </Box>
            </Box>
        </div>
    )
}

export default News
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';

function News() {
    return (
        <div id="nutrition">
            <Box sx={{ backgroundColor: "#fff", color: "#000", height: "100vh", width: "100%", paddingTop: { xs: "4rem", md: "5rem" }, margin: 0 }}>
                <Box>
                    <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, textAlign: "center" }}> <strong>Nutrition</strong> </Typography>
                    <Typography sx={{ fontSize: { xs: "1rem", md: "1.4rem" }, textAlign: "center" }}>Discover meal plans, diet tips, supplements info and delicious recipes to help improve your sports nutrition.</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", md: "start" }, flexDirection: { xs: "column", md: "row" }, padding: "1rem", gap: "2rem", }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <CardMedia
                            sx={{ height: { xs: "12rem", md: "25rem" }, width: { xs: "12rem", md: "25rem" } }}
                            component="img"
                            image="/img/nutritionnews.webp"
                            alt=""
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around", textAlign: "left", alignItems: "start", flexDirection: "column", gap: "1rem" }}>
                        <Typography sx={{ fontSize: "1rem", fontWeight: "700" }}>HEALTHY FOOD</Typography>
                        <Typography sx={{ fontSize: { xs: ".8rem", md: "1rem" }, fontWeight: "700" }}>5 High-Protein Foods to Help You Build Strength and Muscle</Typography>
                        <Typography sx={{ fontSize: { xs: ".8rem", md: "1rem" }, }}>Including the right protein-rich foods in your diet is essential for muscle growth and overall strength.</Typography>
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
                                    transition: "width .3s linear"
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
                <Box sx={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    flexDirection: { xs: "column", md: "column" }, width: "auto", gap: "1rem", backgroundColor: "#fff",
                }}>
                    <Typography sx={{ fontSize: { xs: "", md: "1.2rem" }, fontWeight: "700" }} >Other Article</Typography>
                    <Divider sx={{ width: { xs: "100%", md: "80%" }, border: "1px solid black" }} />

                    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: "1rem",  }}>
                        <Box sx={{
                            border: "2px solid rgba(0, 0, 0, 0.3)",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", margin: "1rem", width: {xs: "18rem", md: "25rem"}, height: "100%"
                        }}>
                            <CardMedia
                                sx={{ height: { xs: "18rem", md: "20rem" }, width: { xs: "18rem", md: "25rem" } }}
                                component="img"
                                image="/img/nutritionnews.webp"
                                alt=""
                            />
                            <Box sx={{ padding: ".5rem", textAlign: "left" }}>
                                <Typography sx={{ fontSize: { xs: "1rem", md: "1rem" }, fontWeight: "700" }}>Low-Calorie Foods: Your Key to Effective Fat Loss</Typography>
                                <Typography sx={{ fontSize: { xs: ".8rem", md: ".8rem" } }}>Incorporating nutrient-dense, low-calorie foods like leafy greens,
                                    lean proteins, and fruits can help you stay full while maintaining a calorie deficit.
                                    These foods support fat loss by boosting metabolism and reducing overall calorie intake without compromising nutrition.
                                </Typography>
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
                                            transition: "width .3s linear"
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

                        <Box sx={{
                            border: "2px solid rgba(0, 0, 0, 0.3)",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}>
                            <CardMedia
                                sx={{ height: { xs: "18rem", md: "25rem" }, width: { xs: "18rem", md: "25rem" } }}
                                component="img"
                                image="/img/nutritionnews.webp"
                                alt=""
                            />
                            <Box sx={{ padding: ".5rem" }}>
                                <Typography>Title News 1</Typography>
                                <Typography>Title News 1</Typography>
                                <Typography>Title News 1</Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            border: "2px solid rgba(0, 0, 0, 0.3)",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}>
                            <CardMedia
                                sx={{ height: { xs: "18rem", md: "25rem" }, width: { xs: "18rem", md: "25rem" } }}
                                component="img"
                                image="/img/nutritionnews.webp"
                                alt=""
                            />
                            <Box sx={{ padding: ".5rem" }}>
                                <Typography>Title News 1</Typography>
                                <Typography>Title News 1</Typography>
                                <Typography>Title News 1</Typography>
                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Box>
        </div>
    )
}

export default News
import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';

const workoutCategories = [
    { title: "Workout for Men", image: "/workoutcategories/fatloss.png" },
    { title: "Workout for Women", image: "/workoutcategories/fatloss.png" },
    { title: "Building Muscles", image: "/workoutcategories/fatloss.png" },
    { title: "Fat Loss", image: "/workoutcategories/fatloss.png" },
    { title: "Increase Strength", image: "/workoutcategories/fatloss.png" },
    { title: "Core Workout", image: "/workoutcategories/fatloss.png" },
    { title: "Full Body", image: "/workoutcategories/fatloss.png" },
    { title: "Sport Performance", image: "/workoutcategories/fatloss.png" },
    { title: "Calisthenics", image: "/workoutcategories/fatloss.png" },
    { title: "Home Workout", image: "/workoutcategories/fatloss.png" },
];

function Categories() {
    return (
        <div id='categories'>
            <Box sx={{ backgroundColor: "#fff", color: "#000", height: "100%", width: "100%", paddingTop: { xs: "4rem", md: "5rem" }, margin: 0 }}>
                <Typography
                    sx={{
                        fontSize: { xs: "1rem", md: "3rem" },
                        textAlign: "center",
                        color: "#059",
                        fontWeight: "bold",
                        mb: 4,
                    }}
                >
                    Workout Categories
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "2rem",
                    }}
                >
                    {workoutCategories.map((category, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={category.image}
                                alt={category.title}
                                sx={{
                                    height: { xs: "12rem", md: "15rem" },
                                    width: { xs: "12rem", md: "15rem" },
                                    borderRadius: "0.5rem",
                                }}
                            />
                            <Typography fontSize={"1rem"} mt={2}>
                                {category.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </div>
    );
}

export default Categories;

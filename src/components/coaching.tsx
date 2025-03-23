import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function Coaching() {
    return (
        <div id="coaching">
            <Box sx={{
                minHeight: "100vh", width: "100%", backgroundColor: "#fff",
                display: "flex", justifyContent: "center", flexDirection: "column"
            }}>
                <Box sx={{ padding: "1rem" }}>
                    <Box sx={{ color: "#000", textAlign: "center" }}>
                        <Typography sx={{ fontSize: {xs: "1rem", md: "3rem"}, fontWeight: 900, fontFamily: "Poppins, sans-serif" }}>
                            Coaching Program
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: "2rem" }}>
                        <Card sx={{
                            maxWidth: { xs: "20rem", md: "30rem" },
                            height: { xs: "20rem", md: "30rem" },
                            border: "2px solid rgba(0, 0, 0, 0.3)",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}>
                            <CardMedia
                                sx={{ height: "22rem", border: "2px solid black" }}
                                image="/coaching/coaching1.webp"
                                title="Push Pull Legs"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <strong>Personal Training</strong>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    1-on-1 coaching with a certified trainer, tailored to individual goals (fat loss, muscle gain, strength).
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            maxWidth: { xs: "20rem", md: "30rem" },
                            height: { xs: "20rem", md: "30rem" },
                            border: "2px solid rgba(0, 0, 0, 0.3)",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}>
                            <CardMedia
                                sx={{ height: "22rem", border: "2px solid black" }}
                                image="/coaching/coaching2.webp"
                                title="Push Pull Legs"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <strong>Weightlifting Coaching</strong>
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Focuses on Olympic weightlifting movements.
                                    Best for athletes and strength enthusiasts looking to improve lifting performance.
                                </Typography>
                            </CardContent>
                        </Card>

                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Coaching
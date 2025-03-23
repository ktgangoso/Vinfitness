import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HashLink } from "react-router-hash-link";

function Home() {
    return (
        <div id="home">
            <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "center", margin: { xs: ".5rem", md: "0" },
                borderRadius: "1rem"
            }}>
                <Box sx={{
                    minHeight: "100vh", width: "100%",
                    borderRadius: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: { xs: "column", md: "row" },

                }}>

                    {/* home page */}
                    <Box sx={{
                        textAlign: "center", height: "100%", width: { xs: "100%", md: "50%" },
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "#fff"
                    }}>
                        <Box sx={{
                            // backdropFilter: "blur(5px)",
                            // border: "2px solid rgba(255, 255, 255, 0.3)",
                            // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                            // backgroundColor: "rgba(0, 0, 0, 0.1)",
                            marginTop: "8rem",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "2rem", gap: "1rem"

                        }}>
                            <Typography sx={{
                                fontSize: { xs: "1.5rem", md: "3rem" }, padding: { xs: "0", md: "1.5rem" },
                                fontWeight: "700"
                            }}>
                                Build Your Strength,
                                <br />
                                anytime, anywhere.
                                <br />
                            </Typography>

                            <Typography>
                                Start your fitness journey today and unlock a stronger,
                                healthier version of yourself. No matter where you are,
                                every step forward brings you closer to your goals because
                                greatness begins with a single move!

                            </Typography>

                            {/* <Button variant="contained" sx={{
                                borderRadius: "2rem",
                                width: { xs: "100%", md: "50%" },
                                padding: { xs: ".5rem", md: "1rem" },
                            }} smooth to="/#training" >Start Now!</Button> */}
                            {/* <HashLink >Training</HashLink> */}

                            <HashLink smooth to="/#training" style={{ textDecoration: "none" }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: "2rem",
                                        width: { xs: "10rem", md: "15rem" },
                                        padding: { xs: ".5rem", md: "1rem" },
                                    }}
                                >
                                    Start Now!
                                </Button>
                            </HashLink>

                        </Box>
                    </Box>


                </Box>
            </Box>


        </div>
    )
}

export default Home
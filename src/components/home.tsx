import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Home() {
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: { xs: ".5rem", md: "1rem" }, borderRadius: "1rem" }}>
                <Box sx={{
                    height: "100vh", width: { xs: "100%",  md: "100%" },
                    borderRadius: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: { xs: "column", md: "row" }, 
                }}>

                    {/* left side */}
                    <Box sx={{ backgroundImage: "url('/background/homebg.webp')", textAlign: "left", height: "100%", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "#000" }}>
                        <Box sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(3px)",
                            margin: "1rem",
                            border: "2px solid rgba(255, 255, 255, 0.3)", 
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
                            borderRadius: "10px", 
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "2rem"
                        
                        }}>
                            <Typography sx={{
                                fontSize: { xs: ".8rem", sm: "1.3rem", md: "1.5rem" } , padding: { xs: ".5rem", sm: "1.3rem", md: "1.5rem" }, fontWeight: "700"
                            }}>
                                Anytime,
                                <br />
                                anywhere.
                                <br />
                                And now with Apple Fitness+.
                                <br />
                                Start your fitness journey today and unlock a stronger,
                                <br />
                                healthier version of yourself. No matter where you are,
                                <br />
                                every step forward brings you closer to your goals—because
                                <br />
                                greatness begins with a single move!
                            </Typography>
                            <Button variant="contained" sx={{width: { xs: "100%",  md: "50%" }, padding: { xs: ".5rem",  md: "1rem" }}}>Start Now!</Button>
                        </Box>
                    </Box>

                    {/* right side */}
                    <Box sx={{ backgroundImage: "url('/img/workout.webp')", height: "100%", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                     
                    </Box>
                </Box>
            </Box>


        </div>
    )
}

export default Home
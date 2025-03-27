import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { colors } from '@mui/material';

// modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: "#000"
};

function Training() {

    const [pushopen, pplOpen] = React.useState(false);
    const PPLOpen = () => pplOpen(true);
    const PPLClose = () => pplOpen(false);

    const [upperopen, ulOpen] = React.useState(false);
    const ULOpen = () => ulOpen(true);
    const ULClose = () => ulOpen(false);

    const [fullopen, fbOpen] = React.useState(false);
    const FBOpen = () => fbOpen(true);
    const FBClose = () => fbOpen(false);

    return (
        <div id="training">
            <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "center", paddingTop: { xs: "3rem", md: "0" },
            }}>
                <Box sx={{
                    minHeight: "100vh", width: "100%", backgroundColor: "#fff",
                    display: "flex", justifyContent: "center", flexDirection: "column", padding: { xs: "1rem", md: "0" }
                }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "1rem" }}>
                        <Typography sx={{ fontSize: "2rem", textAlign: "center", color: "#000" }}>
                            This Program will helps you to choose the best workout plan for you
                        </Typography>
                        <Typography sx={{ fontSize: "1rem", textAlign: "center", color: "#000" }}>
                            Unlock your full potential with personalized training tailored to your needs.
                            Whether in a group or one-on-one, our expert coaches are here to guide you every step of the way.
                        </Typography>

                        <Button variant="contained" sx={{
                            borderRadius: "2rem",
                            width: { xs: "100%", md: "25%" },
                            padding: { xs: ".5rem", md: "1rem" },
                            margin: "1rem",
                            fontSize: { xs: ".7rem", md: ".9rem" },
                        }}>
                            Learn more about fitness
                        </Button>

                    </Box>
                    <Box sx={{
                        display: "flex", justifyContent: "space-around", alignItems: "center",
                        flexDirection: { xs: "column", md: "row" }, gap: { xs: "1rem", md: 0 }
                    }}>

                        {/* Push Pull Legs Card */}
                        <Card sx={{
                            maxWidth: 345,
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/workoutplan/ppl.png"
                                title="Push Pull Legs"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Push Pull Legs
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    The Push-Pull-Legs (PPL) split divides training into Push, Pull, and Legs days for balanced growth and recovery.
                                    It’s effective for strength and hypertrophy, typically done 3 or 6 days a week.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={PPLOpen}>Learn More</Button>
                            </CardActions>
                        </Card>

                        {/* Push Pull Legs Modal */}

                        <Modal
                            open={pushopen}
                            onClose={PPLClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", color: "#000" }}
                        >
                            <Box sx={{ backgroundColor: "#fff", padding: "2rem" }}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    <strong>Push Pull Legs</strong>
                                </Typography>
                                <Box>
                                    <Typography>Push workouts focus on training the upper body muscles responsible for pushing movements,
                                        primarily targeting the chest, shoulders, and triceps.
                                    </Typography>
                                    <br />
                                    <Typography><strong>Push Workout Muscles</strong></Typography>
                                    <ul>
                                        <li><strong>Chest:</strong> Incline dumbbell press, Flat dumbbell press, and Pec deck flyes</li>
                                        <li><strong>Shoulders:</strong> Shoulder press, Lateral Raise, Rope Face pulls </li>
                                        <li><strong>Triceps:</strong> Triceps Pulldown, dips</li>
                                    </ul>
                                </Box>
                                <Box>
                                    <Typography>Push workouts focus on training the upper body muscles responsible for pushing movements,
                                        primarily targeting the chest, shoulders, and triceps.
                                    </Typography>
                                    <br />
                                    <Typography><strong>Push Workout Muscles</strong></Typography>
                                    <ul>
                                        <li><strong>Chest:</strong> Incline dumbbell press, Flat dumbbell press, and Pec deck flyes</li>
                                        <li><strong>Shoulders:</strong> Shoulder press, Lateral Raise, Rope Face pulls </li>
                                        <li><strong>Triceps:</strong> Triceps Pulldown, dips</li>
                                    </ul>
                                </Box>
                                <Box>
                                    <Typography>Push workouts focus on training the upper body muscles responsible for pushing movements,
                                        primarily targeting the chest, shoulders, and triceps.
                                    </Typography>
                                    <br />
                                    <Typography><strong>Push Workout Muscles</strong></Typography>
                                    <ul>
                                        <li><strong>Chest:</strong> Incline dumbbell press, Flat dumbbell press, and Pec deck flyes</li>
                                        <li><strong>Shoulders:</strong> Shoulder press, Lateral Raise, Rope Face pulls </li>
                                        <li><strong>Triceps:</strong> Triceps Pulldown, dips</li>
                                    </ul>
                                </Box>
                            </Box>
                        </Modal>

                        {/* Upper Lower Card */}
                        <Card sx={{
                            maxWidth: 345,
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/workoutplan/up.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Upper Lower
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    The Upper-Lower split alternates between Upper Body (chest, back, shoulders, arms) and
                                    Lower Body (quads, hamstrings, glutes, calves) workouts.
                                    It’s great for strength and hypertrophy, usually done 4 days a week.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={ULOpen}>Learn More</Button>
                            </CardActions>
                        </Card>

                        {/* Upper Lower Modal */}

                        <Modal
                            open={upperopen}
                            onClose={ULClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Upper Lower Modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                        {/* Full Body Card */}
                        <Card sx={{
                            maxWidth: 345,
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}>
                            <CardMedia
                                sx={{ height: "140px" }}
                                image="/workoutplan/fullbody.webp"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Full Body
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    The Full Body workout targets all major muscle groups in a single session, maximizing efficiency and frequency.
                                    It’s ideal for strength, hypertrophy, and fat loss, typically done 3 to 4 times a week.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={FBOpen}>Learn More</Button>
                            </CardActions>
                        </Card>

                        {/* Full Body Modal */}

                        <Modal
                            open={fullopen}
                            onClose={FBClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Full Body Modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                        </Modal>

                    </Box>
                </Box>
            </Box>

        </div>
    )
}

export default Training
import React from 'react';
import { Card, Grid, CardContent, Typography, Box } from '@mui/material';
import styles from "./BlogContent.module.css"

const BlogContent = ({ imageSrc, title, content }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Grid container sx={{ width: '100%', display: 'flex' }}>
                <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                    <Card className={styles.cardLeft}
                    >
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${imageSrc || "https://via.placeholder.com/500"})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        >
                            <Typography variant="h1" sx={{
                                color: 'white',
                                fontWeight: 800,
                                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                                lineHeight: '1.2',
                                letterSpacing: '-0.03em',
                                textAlign: 'center',
                                padding: '0 10%',
                                textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                            }}>
                                Our Blog
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                    <Card className={styles.cardRight}
                        sx={{
                            background: "#1E1B1B",
                            color: 'white',
                        }}
                    >
                        <CardContent sx={{ width: "70%", display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Typography variant="h3" sx={{
                                fontWeight: 700,
                                fontSize: '36px',
                                width: '90%',
                            }}>
                                {title || "Title Here"}
                            </Typography>
                            <Typography variant="body1" sx={{
                                fontWeight: 500,
                                fontSize: '15px',
                                lineHeight: '31.5px',
                                widht: '614px',
                                height: '96px'
                            }}>
                                {content || "Content goes here. This is placeholder text."}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default BlogContent;

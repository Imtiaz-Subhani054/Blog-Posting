import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import image from '../../../assets/Image.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import styles from './FeaturedCard.module.css'

const FeaturedCard = ({ text, title }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTextDisplay = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            className={styles.cardPadding}
        >
            <Grid item xs={12} className={styles.cardFlex}
            >
                <Grid item xs={12} sm={3} sx={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: { xs: '4px 4px 0 0', sm: '4px 0 0 4px' },
                    p: 2,
                    height: "250px"
                }}>
                </Grid>
                <Grid item xs={12} sm={9} className={styles.featuredGrid} sx={{
                    padding: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 2,
                    }}>
                        <Typography variant="body1" sx={{ color: 'lightgrey' }}>
                            Posted on October 6th 2021
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#FF6433' }}>
                            Featured
                        </Typography>
                    </Box>
                    <Typography variant="h5" align="start" sx={{ color: 'black', marginBottom: 1, maxWidth: '500px' }}>
                        {title || "Should I Buy a New Car or lease a New Car in 2021?"}
                    </Typography>
                    <Typography variant="body1" align="start" className={!isExpanded ? styles.textClamp : ''} sx={{ color: 'grey', marginBottom: 4, fontSize: "14px" }} >
                        {text || "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical. We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical."}
                    </Typography>
                    <div className={styles.readMore} onClick={toggleTextDisplay}>
                        <p>{isExpanded ? 'Show Less' : 'Read More'}</p>
                        <TrendingFlatIcon className={isExpanded ? styles.icon : ""} sx={{ marginTop: "3px" }} />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FeaturedCard;

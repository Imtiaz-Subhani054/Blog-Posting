import React from 'react';
import { Grid } from '@mui/material';
import BlogContent from './BlogContent/BlogContent';
import image from '../../assets/Image.png';
import FeaturedCard from './FeaturedCard/FeaturedCard';
import BlogCards from './BlogCards/BlogCards';

const Blog = () => {
    return (
        <>
            <Grid
                sx={{ overflow: 'hidden', position: 'relative', padding: "0px" }}
                container
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
            >
                <Grid item xs={12} sx={{ overflow: 'hidden', boxShadow: 'none', marginTop: "40px" }}>
                    <BlogContent
                        imageSrc={image}
                        title="Diagnose Car Problems If You Don’t Know Much About Cars"
                        content="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical."
                    />
                </Grid>
                <FeaturedCard />
                <BlogCards />
            </Grid>
        </>
    );
}

export default Blog;

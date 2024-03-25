import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogDetails } from '../../store/blogSlice';
import { Typography, Grid } from '@mui/material';
import Road from '../../assets/Road.png';

const DetailBlog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { blogDetails, status, error } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(fetchBlogDetails(id));
    }, [dispatch, id]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;
    if (!blogDetails) return null;

    return (
        <Grid xs={12} conatiner justifyContent={"center"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"30px"}>
            <Grid item sm={9} md={9} lg={9} xl={9} sx={{
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                borderRadius: '4px',
                boxShadow: "none",
                width: "70%"
            }}>
                <Typography variant="body1" align='start' sx={{ color: '#939191', fontSize: "12px" }}>
                    Posted on October 6th 2021
                </Typography>
                <Typography variant="h5" align="start" sx={{ color: 'black' }}>
                    {blogDetails?.Title}
                </Typography>
                <Typography variant="body1" align="start" sx={{ color: 'grey', fontSize: "14px" }}>
                    {blogDetails?.Subtitle}
                </Typography>
            </Grid>
            <img
                src={blogDetails?.Image}
                alt={"Detail Post Image"}
                loading="lazy"
                style={{ width: '80%', height: 'auto', borderRadius: '4px', alignItems: "center", maxHeight: "600px" }}
            />
            <Grid sx={{ width: "70%" }} justifyContent={"center"} display={"flex"} flexDirection={"column"} gap={"15px"}>
                <div>
                    <Typography variant="h5" align="start" sx={{ color: 'black' }}>
                        This is the blog post Headline
                    </Typography>
                    <Typography variant="body1" align="start" sx={{ color: 'grey', fontSize: "14px" }}>
                        {blogDetails?.Article || "Default article text. We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause."}
                    </Typography>
                </div>
                <img
                    src={Road}
                    alt={"Detail Post Image"}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                />
                <div>
                    <Typography variant="h5" align="start" sx={{ color: 'black' }}>
                        This is the small blog post Headline
                    </Typography>
                    <Typography variant="body1" align="start" sx={{ color: 'grey', fontSize: "14px" }}>
                        {blogDetails?.Article || "Default article text. We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause."}
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default DetailBlog;

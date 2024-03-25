import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../store/blogSlice';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Card, CardMedia, CardActionArea } from '@mui/material';
import styles from './BlogCards.module.css'

export default function BlogCards() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { blogs, status, error } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    const handleCardClick = (id) => {
        navigate(`/blog/${id}`);
    };

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <Grid container xs={12} display={"flex"} rowSpacing={3} columnSpacing={3} className={styles.cardPadding}>
            {
                blogs.map((blog) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={blog?.id} >
                        <CardActionArea onClick={() => handleCardClick(blog?.id)}>
                            <Card sx={{ height: 400 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`${blog?.Image}?w=248&fit=crop&auto=format`}
                                    alt={blog?.Title}
                                    width={"100%"}
                                />
                                <Grid sx={{ textAlign: 'left', padding: '10px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {blog?.Title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {blog?.Article?.length > 100 ? `${blog?.Article.substring(0, 70)}...` : blog?.Article}
                                    </Typography>
                                </Grid>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))
            }
        </Grid >
    );
}

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, Container, Grid, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { UserStateContext } from "../App";
import * as Api from "../api";
import Header from "../components/Header";
import WineCard from "../components/WineCard";
import Footer from "../components/Footer";

export default function DetailPage() {
  const params = useParams();
  const { user } = useContext(UserStateContext);
  const [data, setData] = useState({});
  const [similar, setSimilar] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    Api.get(`detail/${params.index}`)
      .then(res => {
        setData(res.data.result[0]);
        setSimilar(res.data.similar);
      })
      .catch(err => console.log(err));
  }, [params]);

  const likeHandler = () => {
    Api.post(`detail/${params.index}`, {
      user_id: user.id,
    })
      .then(() => {
        setIsLiked(prev => !prev);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: "50px" }} component="div">
        <Grid
          container
          component="div"
          sx={{ border: "1px solid lightgray", p: 3 }}
          style={{ marginBottom: "40px" }}
          spacing={3}
        >
          <Grid
            item
            xs={4}
            component="div"
            sx={{
              borderRight: "1px grey solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="div"
              sx={{ mr: 3.5 }}
              style={{
                maxWidth: "300px",
                maxHeight: "500px",
              }}
            >
              <img src={data?.["image"]} alt="detailImage" />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box component="div">
              <h1>{data?.["title"]}</h1>
              <br></br>
              <p>평점: {data?.["points"]}</p>
              <p>설명: {data?.["description"]}</p>
              <p>가격: ${data?.["price"]}</p>
              <p>원산지: {data?.["country"]}</p>
              {user && (
                <IconButton
                  style={{
                    color: isLiked ? "rgba(215, 25, 235, 0.54)" : "#000000",
                  }}
                  onClick={likeHandler}
                >
                  <FavoriteIcon />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>

        <h2>{data?.["title"]}과 비슷한 술</h2>

        <Grid
          container
          component="div"
          sx={{ p: 3 }}
          spacing={2}
          style={{ margin: "10px 0" }}
        >
          {similar?.map((wine, idx) => {
            return (
              <Grid key={`world-wine-${idx}`} item xs={4}>
                <WineCard wineInfo={wine} />
              </Grid>
            );
          })}
        </Grid>

        <h2>{data?.["title"]}과 잘 어울리는 안주</h2>

        <Grid
          container
          component="div"
          sx={{ p: 3 }}
          spacing={2}
          style={{ margin: "10px 0" }}
        >
          <Grid item xs={4}>
            <Card
              item
              sx={{ border: "1px solid lightgray" }}
              style={{
                width: "330px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={data?.["snackImage1"]}
                alt="snack1"
                style={{ width: "180px", height: "200px" }}
              />

              <p>{data?.["snack1"]}</p>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              item
              sx={{ border: "1px solid lightgray" }}
              style={{
                width: "330px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={data?.["snackImage2"]}
                alt="snack2"
                style={{ width: "180px", height: "200px" }}
              />
              <p>{data?.["snack2"]}</p>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

<<<<<<< HEAD
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
=======
import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
>>>>>>> abe51e642b29e69a92389b123f741fbc3f6049f0

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

<<<<<<< HEAD
const Home = ({ type }) => {
  console.log("Homepage");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("/api/video/" + type);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((v) => {
        return <Card key={v._id} video={v} />;
      })}
=======
const Home = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
>>>>>>> abe51e642b29e69a92389b123f741fbc3f6049f0
    </Container>
  );
};

export default Home;

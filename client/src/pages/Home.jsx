import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import { CloseFullscreen } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const url = import.meta.env.VITE_SERVER;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(url + "/video/" + type);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((v) => {
        return <Card key={v._id} video={v} />;
      })}
    </Container>
  );
};

export default Home;

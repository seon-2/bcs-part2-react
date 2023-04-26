import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [metadata, setMetadata] = useState();

  // App.jsx에서 path가 /:tokenId로 되어있고, NftCard에서 Link에 tokenId로 넘겨주고 있음
  // useParams를 이용해 url의 파라미터인 tokenId를 받아올 수 있음
  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // tokenId 잘 가져오는지 확인
  // useEffect(() => console.log("tokenId", tokenId), [tokenId]);

  useEffect(() => {
    getNft();
  }, []);

  // metadata 잘 가져오는지 확인
  // useEffect(() => console.log(metadata), [metadata]);

  return <div>{metadata ? "있을때" : <div>로딩중입니다...</div>}</div>;
};

export default Detail;

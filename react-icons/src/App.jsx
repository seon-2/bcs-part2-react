import { useState, useEffect } from "react";
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudMeatball,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaPooStorm,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa";
// https://react-icons.github.io/react-icons 에서 원하는 아이콘 찾아서 경로 import
// 원하는 icon 이름 그대로! 가져오기

const weatherIcon = {
  // key 값은 string_프리티어 때문에 "" 붙고 안붙고 달라보임 (cf. json에서는 key 값 "" 포함시켜야 함)
  // OpenWeather API 에서 날씨 맑으면 01로 옴 (각 숫자와 날짜가 정해져있음)
  "01": <FaSun size={96} />,
  "02": <FaCloudSun size={96} />,
  "03": <FaCloud size={96} />,
  "04": <FaCloudMeatball size={96} />,
  "09": <FaCloudSunRain size={96} />,
  10: <FaCloudShowersHeavy size={96} />,
  11: <FaPooStorm size={96} />,
  13: <FaSnowflake size={96} />,
  50: <FaSmog size={96} />,
};

function App() {
  // OpenWeather API에 넘겨줄 위도, 경도 useState로 변수 선언
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  // 브라우저를 통해서 위도, 경도값 가져옴
  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      () => {
        alert("위치 정보에 동의 해주셔야 합니다.");
      }
    );
  };
  // useEffect 안에 넣어서 시작할 때 한 번 위도 경도 받아옴
  useEffect(() => {
    getGeolocation();
  }, []);

  // lat이 바뀔 때 감지해서 console.log(lat) 출력
  useEffect(() => console.log(lat), [lat]);
  // lon이 바뀔 때 감지해서 console.log(lon) 출력
  useEffect(() => console.log(lon), [lon]);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center"></div>
  );
}

export default App;

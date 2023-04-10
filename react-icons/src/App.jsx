import { useState, useEffect } from "react";
import axios from "axios";
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
  const [weatherInfo, setWeatherInfo] = useState();

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

  const getWeatherInfo = async () => {
    try {
      // 환경변수 : api 키는 외부로 노출되면 안 됨. 따로 .env파일을 만들어서 변수를 설정해놓고 그 파일은 올리지 않고 api 키만 가져와서 사용
      // 서버 다시 시작 필요

      // axios로 받은 데이터를 response 변수에 담기
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
      );

      // 200번 에러가 오면 alert 처리
      if (response.status !== 200) {
        alert("날씨 정보를 가져오지 못했습니다.");
        return;
      }

      console.log(response.data);
      setWeatherInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect 안에 넣어서 시작할 때 한 번 위도 경도 받아옴
  useEffect(() => {
    getGeolocation();
  }, []);

  // lat이나 lon이 없으면 빠져나감. 둘 다 있으면 getWeatherInfo() 실행
  useEffect(() => {
    if (!lat || !lon) return;

    getWeatherInfo();
  }, [lat, lon]);

  // lat이 바뀔 때 감지해서 console.log(lat) 출력
  useEffect(() => console.log(lat), [lat]);
  // lon이 바뀔 때 감지해서 console.log(lon) 출력
  useEffect(() => console.log(lon), [lon]);

  // REACT_APP_WEATHER_API 확인
  useEffect(() => console.log(process.env.REACT_APP_WEATHER_API), []);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center"></div>
  );
}

export default App;

import { useEffect, useReducer, createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { loginReducer } from "./reducer";
import * as Api from "./api";
import IndexPage from "./pages/IndexPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import WorldMapPage from "./pages/WorldMapPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const res = await Api.get("user/current");
      const currentUser = res.data;

      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });
    } catch {
      console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
    } finally {
      setIsFetchCompleted(true);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetchCompleted) {
    return <div>Loading...</div>;
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={userState}>
        <Router>
          <Routes>
            <Route path="/" exact element={<IndexPage />} />
            <Route path="/main" exact element={<MainPage />} />
            <Route path="/detail/:index" exact element={<DetailPage />} />
            <Route path="/world_map" exact element={<WorldMapPage />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="/user/login" exact element={<LoginPage />} />
            <Route path="/user/register" exact element={<RegisterPage />} />
            <Route path="/my_page" exact element={<MyPage />} />
          </Routes>
        </Router>
      </UserStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './component/page/MainPage';
import PostViewPage from './component/page/PostViewPage'; 

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <p style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>미니 블로그</p>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="post/:postId" element={<PostViewPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
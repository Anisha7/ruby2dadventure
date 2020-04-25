import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import './App.css';
 
const unityContent = new UnityContent(
  "Build/Ruby2DAdventureWebGL.json",
  "Build/UnityLoader.js"
);
 
const App = () => {
  return <div
  style={{
    width: "100vw",
    height: "100%"
  }}
>
<h3 style={{margin:"20px 10px"}}>Instructions: Use arrow keys to move around. Press X to talk to frog. Press C to throw cog to fix robot.</h3>
<Unity unityContent={unityContent} /></div>;
}

export default App;



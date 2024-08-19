import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import LoadMoreData from "./components/Load-More-Data/LoadMoreData";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import menus from "./components/tree-view/data";
import TreeView from "./components/tree-view/TreeView";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* data.js */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      <LightDarkMode />
    </div>
  );
}

export default App;

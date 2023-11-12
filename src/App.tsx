import ProfileCard from "./Components/ProfileCard";
import ColorPicker from "./Components/colorPicker";

function App() {
  return (
    <>
      <div>profile assistance</div>
      <ProfileCard title="alexa" handel="@alexa" />
      <ProfileCard title={"coratana"} handel={"@cortana"} />
      <ProfileCard title={"siri"} handel={"@siri"} />
      <ColorPicker color={"red"} />
      <ColorPicker color={"blue"} />
      <ColorPicker color={"yellow"} />
    </>
  );
}

export default App;

import ColorPicker from "./Components/ColorPicker";
import ProfileCard from "./Components/ProfileCard";
import AlexaImages from "./assets/images/alexa.png";
import CortanaImages from "./assets/images/cortana.png";
import SiriImages from "./assets/images/siri.png";
function App() {
  return (
    <>
      <div>profile assistance</div>
      <div className="flex w-full justify-between px-2">
        <ProfileCard title="alexa" handel="@alexa" imageSrc={AlexaImages} />
        <ProfileCard
          title={"coratana"}
          handel={"@cortana"}
          imageSrc={CortanaImages}
        />
        <ProfileCard title={"siri"} handel={"@siri"} imageSrc={SiriImages} />
      </div>
      <ColorPicker color={"red"} />
      <ColorPicker color={"blue"} />
      <ColorPicker color={"yellow"} />
    </>
  );
}

export default App;

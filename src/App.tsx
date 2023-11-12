import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <>
      <div>profile assistance</div>
      <ProfileCard title="alexa" handel="@alexa" />
      <ProfileCard title={"coratana"} handel={"@cortana"} />
      <ProfileCard title={"siri"} handel={"@siri"} />
    </>
  );
}

export default App;

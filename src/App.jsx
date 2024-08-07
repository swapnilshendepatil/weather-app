import styled from "styled-components";
import WeatherApp from "./Components/WeatherApp";

const StyledApp = styled.div`
  min-height: 100vh;
  display: grid;
`;
const App = () => {
  return (
    <StyledApp>
      <WeatherApp />
    </StyledApp>
  );
};

export default App;

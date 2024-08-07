import styled from "styled-components";

export const WeatherComponent = styled.div`
  place-self: center;
  padding: 40px;
  border-radius: 10px;
  background-image: linear-gradient(45deg, #000000, #4d4d4d);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const InputFeild = styled.input`
  height: 50px;
  border: none;
  outline: none;
  border-radius: 40px;
  padding-left: 25px;
  color: #626262;
  background: #ebfffc;
  font-size: 18px;
`;
export const Tempreture = styled.p`
  color: #fff;
  font-size: 80px;
  line-height: 1;
`;
export const LocationP = styled.p`
  color: #fff;
  font-size: 40px;
`;
export const WeatherDataDiv = styled.div`
  width: 100%;
  margin-top: 40px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;
export const ColumnofWetherDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 22px;
  span {
    display: block;
    font-size: 16px;
  }
  img {
    width: 26px;
    margin-top: 10px;
  }
`;

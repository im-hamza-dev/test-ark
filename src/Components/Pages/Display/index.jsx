import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Segment, Label, Header } from "semantic-ui-react";
import styled from "styled-components";
export default function Display() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://api.exchangeratesapi.io/latest")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <>
      <div>
        <StyledSegment>
          <Header>Rates</Header>
          <hr style={{ opacity: 0.3 }} />
          <br />
          <FlexBox>
            <Label.Group color="blue">
              {data.rates &&
                Object.entries(data.rates).map((row, index) => {
                  return <Label key={index}>{row}</Label>;
                })}
            </Label.Group>
          </FlexBox>
        </StyledSegment>
      </div>
    </>
  );
}

const StyledSegment = styled((props) => <Segment padded="very" {...props} />)`
  &.ui[class*="very padded"].segment {
    padding: 2.2em;
  }

  &&&&& {
    border-radius: 16px;
    box-shadow: 0px 0px 10px #e0e0e0;
    border: none;
    width: 80%;
    margin: 50px auto;
  }
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

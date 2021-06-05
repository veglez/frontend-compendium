import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link)`
  width: 200px;
  /* border: 1px solid crimson; */
  height: 300px;
  overflow: hidden;

  img:first-child {
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: top center;
  }
`;

const Card = ({ path, image, id, name }) => {
  return (
    <Container to={path}>
      <img src={image} alt={`${id} project`} />
      {name}
    </Container>
  );
};

export default Card;

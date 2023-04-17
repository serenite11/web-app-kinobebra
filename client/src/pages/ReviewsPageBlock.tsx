import React from 'react';
import styled from "styled-components";

const ReviewsBlock = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 200px;
  backdrop-filter: brightness(75%);
  border-radius: 25px;
  display: grid;
  align-items: center;
`

const ReviewsPage = () => {
    return (
        <ReviewsBlock>
           Вы пока не оставили ни одного отзыва.
        </ReviewsBlock>
    );
};

export default ReviewsPage;
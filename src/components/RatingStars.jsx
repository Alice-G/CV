import React from 'react'

import styled from 'styled-components'
import greyStar from '../assets/starGrey.svg'
import activeStar from '../assets/starPrimaryRed.svg'

const StarsContainer = styled.div`
   display: flex;
   width: 196px;
   margin: auto;

   // medium large
   @media (min-width: 770px) and (max-width: 1199px) {
      // width: 100px;
   }

   // medium screens
   @media (min-width: 375px) and (max-width: 768px) {
      width: 150px;
   }

   // small screens
   @media (max-width: 375px) {
      width: 100px;
   }
`
const Star = styled.div`
   height: 30px;
   width: 30px;
   margin: auto;

   // medium large
   @media (min-width: 770px) and (max-width: 1199px) {
      height: 25px;
      width: 25px;
   }

   // medium screens
   @media (min-width: 375px) and (max-width: 768px) {
      height: 20px;
      width: 20px;
      margin: 2px;
   }

   // small screens
   @media (max-width: 375px) {
      height: 15px;
      width: 15px;
   }
`

export default function Rating(props) {
   let starsCount = props.rating

   const maxStars = 5
   const stars = []

   for (let i = 1; i < maxStars + 1; i++) {
      if (i <= starsCount) {
         stars.push(
            <Star key={i} style={{ content: `url(${activeStar})` }}></Star>
         )
      } else {
         stars.push(
            <Star key={i} style={{ content: `url(${greyStar})` }}></Star>
         )
      }
   }
   return <StarsContainer>{stars}</StarsContainer>
}

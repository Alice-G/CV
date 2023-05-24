import React from 'react'
import { useState } from 'react'

import styled from 'styled-components'
import colors from '../style/colors'

import svgArrow from '../assets/wingArrow.svg'

const CollapseContainer = styled.div`
   margin: 3%;

   width: 100%;

   @media (max-width: 768px) {
      margin: 10px;
      margin-bottom: 10px;
   }
`

const Heading = styled.h2`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   color: ${colors.light};
   background: ${colors.primary};
   padding: 0 15px;
   border-radius: 10px;

   line-height: 52px;
   font-size: 18px;

   // medium large
   @media (min-width: 769px) and (max-width: 1199px) {
      font-size: 16px;
      line-height: 48px;
   }

   @media (min-width: 375px) and (max-width: 768px) {
      font-size: 15px;
      line-height: 40px;
   }

   @media (max-width: 375px) {
      font-size: 13px;
      line-height: 30px;
   }
`
const Arrow = styled.img`
   height: 14px;
   width: 23px;

   @media (max-width: 768px) {
      height: 9px;
      width: 15px;
   }
`

const Content = styled.p`
   font-size: 18px;
   background-color: ${colors.secondary};
   border-radius: 0 0 10px 10px;
   padding: 30px 20px 20px 20px;
   margin-top: -15px;
   position: relative;
   z-index: -1;

   @media (min-width: 769px) and (max-width: 1199px) {
      font-size: 16px;
   }

   @media (max-width: 768px) {
      font-size: 12px;
      padding: 24px 11px 11px 11px;
   }
`

function Collapsible(props) {
   const [open, setOPen] = useState(false) // we can chose later to make it open by default

   const [rotate, setRotate] = useState('180deg')

   const toggle = () => {
      setRotate(rotate === '180deg' ? '0deg' : '180deg')
      setOPen(!open)
   }
   return (
      <CollapseContainer>
         <Heading onClick={toggle}>
            {props.title}
            <Arrow
               src={svgArrow}
               style={{ rotate: `${rotate}` }}
               alt="chevron"
            />
         </Heading>
         {open && <Content>{props.text}</Content>}
      </CollapseContainer>
   )
}
export default Collapsible

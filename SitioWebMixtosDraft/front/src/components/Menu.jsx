import React from 'react'
import { Banner } from './Banner';
import { ContentMenu } from './ContentMenu';
import { Footer } from './Footer';

export const Menu = () => {
  return (
    <>
        <Banner/>
        {/* <ItemProduct/> */}
        <ContentMenu/>
        <Footer/>
    </>
  )
}

import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import colors from '../shared/css/colors'

const Title = styled.h1`
  color: ${colors.offWhite};
  font-family: 'CircularStd-Medium';
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 60px;
    line-height: 72px;
    margin-bottom: 60px;
  }
`

const Text = styled.p`
  color: ${colors.offWhite};
  font-family: 'CircularStd-Book';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`

const Link = styled.a`
  color: ${colors.peach};
  font-family: 'CircularStd-Medium';
`

const Footer = styled.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
`

const Email = styled.a`
  color: ${colors.peach};
  font-family: 'CircularStd-Medium';
  font-size: 16px;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Zach Nolan" keywords={[`gatsby`, `application`, `react`]} />
    <Title>
      Hi, I'm Zach Nolan.<br />
      I help fast growing companies build scalable software.
    </Title>
    <Text>
      Former co-founder of Onyx, a design &amp; development agency based in Los Angeles.
    </Text>
    <Text>
      I've worked with Google, Belkin, Participant Media, Shout! Factory...
    </Text>
    <Text>
      Current Projects: <Link href='https://stardust.co' target='_blank'>Stardust</Link> &amp; <Link href='https://astra.finance' target='_blank'>Astra Finance</Link>
    </Text>
    <Footer>
      <Text>Interested in working together? Let's talk.</Text>
      <Email href='mailto:zachrnolan@gmail.com'>
        zachrnolan@gmail.com
      </Email>
    </Footer>
  </Layout>
)

export default IndexPage

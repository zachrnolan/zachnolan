import { createGlobalStyle } from "styled-components"
import fontFiles from "./fonts"

export default createGlobalStyle`
  @font-face {
    font-family: "CircularStd-Book";
    font-style: normal;
    font-weight: normal;
    src: local("CircularStd-Book"), local("CircularStd-Book"), url(${fontFiles.CircularBookTTF}) format("ttf"), url(${fontFiles.CircularBookWOFF}) format("woff");
  }
  @font-face {
    font-family: "CircularStd-Medium";
    font-style: normal;
    font-weight: normal;
    src: local("CircularStd-Medium"), local("CircularStd-Medium"), url(${fontFiles.CircularMediumTTF}) format("ttf"), url(${fontFiles.CircularMediumWOFF}) format("woff");
  }
  @font-face {
    font-family: "CircularStd-Bold";
    font-style: normal;
    font-weight: normal;
    src: local("CircularStd-Bold"), local("CircularStd-Bold"), url(${fontFiles.CircularBoldTTF}) format("ttf"), url(${fontFiles.CircularBoldWOFF}) format("woff");
  }
`

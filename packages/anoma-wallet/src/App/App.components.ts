import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const MotionContainer = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background1};
  transition: all 0.3s linear;
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
`;

export const BottomSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 120px);
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  // TODO: maybe this is too hacky? maybe there could be just another div
  // behind the main one with transform: translate(-4px, 4px);
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.background2};
  padding: ${(props) =>
    props.theme.themeConfigurations.isLightMode
      ? "16px 32px 32px"
      : "20px 36px 32px 32px"};
  min-height: 620px;
  width: 480px;
  border-radius: 24px;
  overflow-x: hidden;
  ${(props) =>
    props.theme.themeConfigurations.isLightMode
      ? `border: solid 4px ${props.theme.colors.border}`
      : ""};
  border-left: solid 8px ${(props) => props.theme.colors.border};
  border-bottom: solid 8px ${(props) => props.theme.colors.border};
  transition: background-color 0.3s linear;
`;
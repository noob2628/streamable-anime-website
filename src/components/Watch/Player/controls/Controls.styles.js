import { Gesture } from "@vidstack/player-react";
import styled from "styled-components";

export const ControlsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &::before {
    left: 0;
    right: 0;
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    aspect-ratio: 8 / 1;
    z-index: 0;
    pointer-events: none;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BottomContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem 2.5rem;
`;

export const BottomBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0.5rem;
`;

export const PlayWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
  flex: 1;
`;

export const VideoGesture = styled(Gesture)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

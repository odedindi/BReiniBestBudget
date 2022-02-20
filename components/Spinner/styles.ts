import styled, { keyframes } from 'styled-components';

export const Container = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const dash = keyframes`
 0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 35;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 135;
  }
`;
export const Svg = styled.svg.attrs({
	xmlns: 'http://www.w3.org/2000/svg',
	xmlnsXlink: 'http://www.w3.org/1999/xlink',
	xmlSpace: 'preserve',
	version: '1.1',
	baseProfile: 'tiny',
	x: '0px',
	y: '0px',
	viewBox: '0 0 24 24',
})`
	width: 24px;
	height: 24px;
`;
export const Circle = styled.circle.attrs({ cx: '12', cy: '12', r: '10' })`
	fill: none;
	stroke-linecap: round;
	stroke-width: 2;
	stroke: #29b6f6;
	animation: ${dash} 1.5s ease-in-out infinite;
`;

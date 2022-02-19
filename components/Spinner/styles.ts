import styled, { keyframes } from 'styled-components';
import { LoaderCircle } from '@styled-icons/boxicons-regular/LoaderCircle';

export const VisuallyHidden = styled.span`
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important;
	height: 1px !important;
	overflow: hidden !important;
	padding-top: 0 !important;
	padding-right: 0 !important;
	padding-bottom: 0 !important;
	padding-left: 0 !important;
	position: absolute !important;
	white-space: nowrap !important;
	width: 1px !important;
`;

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Spinner = styled(LoaderCircle)`
	animation: ${rotate} 5s linear infinite;
	color: darkgoldenrod;

	width: 3rem;
	height: 3rem;
`;

export const Container = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
`;

import styled, { css } from 'styled-components';

export const CarouselContainer = styled.div`
	min-height: 50vh;
	width: 100vw;
	background: #444;
`;

export const Box = styled.div`
	position: absolute;
	background: #00718b;

	width: 100%;
	height: 100%;

	text-align: center;
	font-size: 40px;
	color: white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button<{ prev?: boolean }>`
	position: absolute;

	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;

	max-width: 10rem;
	height: 100%;

	background-color: #1f201c;
	color: white;
	text-decoration: none;
	transition: all 0.2s linear;

	cursor: pointer;

	&:hover {
		color: #92bf3e;
	}
	${({ prev }) =>
		prev
			? css`
					border-right: 1px solid rgba(146, 191, 62, 0.1);
					left: 0;
			  `
			: css`
					right: 0;
					border-left: 1px solid rgba(146, 191, 62, 0.1);
			  `}
`;

export const ButtonContainer = styled.div<{ prev?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 100%;

	align-items: ${({ prev }) => (prev ? 'flex-end' : 'flex-start')};
`;
export const ButtonTitle = styled.span`
	padding: 0 15px;
	font-family: 'ff-meta-serif-web-pro';
	text-transform: uppercase;
	font-size: 14px;
`;

export const ArrowSvg = styled.svg<{ prev?: boolean }>`
	width: 71px;
	height: 15px;

	${({ prev }) =>
		prev &&
		css`
			transform: rotate(180deg);
		`}
`;

export const Dots = styled.ul`
	display: flex;
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translatex(-50%);
	z-index: 100;
	padding: 0;
	margin: 0;

	background-color: rgba($brand-dark, 10%);
	border-radius: 5px;
	li {
		margin: 5px;
		list-style: none;
		width: 10px;
		height: 10px;
		background-color: $brand-light;
		border-radius: 50%;
		cursor: pointer;
		opacity: 0.7;
		transition: opacity;
		transition-duration: 300ms;
		transition-timing-function: ease;
		&.active {
			opacity: 1;
			pointer-events: none;
		}
	}
`;

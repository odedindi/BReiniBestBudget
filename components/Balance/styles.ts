import styled from 'styled-components';

/*
// colors
$black: #000;
$white: #fff;
$gray: #b1b1b1;
$mediumgray: #757575;
$lightgray: #dadada;
$verylightgray: #f0f0f0;
$darkgray: rgba(0,0,0,0.16);
$red: #e31515;
$green: #148727;

// media
$screen-small: 767px;

// misc
$border: 1px solid $lightgray;
 */
export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 3em 0 2em 0;
	height: 90px;
`;
export const Row = styled.div`
	display: flex;
	padding: 0 1em;
	border: 1px solid #b1b1b1;
	border-radius: 6px;
	background-color: #f0f0f0;
	font-size: 0.8em;
	font-weight: bold;
`;

export const BalanceWrapper = styled.div`
	display: flex;
`;

export const BalanceSymbol = styled.div`
	align-self: center;
	padding-bottom: 1.2em;
`;

export const BalanceItem = styled.div`
	flex: 1;
	padding: 0.5em 0;
`;
export const BalanceAmount = styled.div`
	display: inline-block;
	padding: 1em;
	margin: 0.5em;
	border: 1px solid #b1b1b1;
	border-radius: 6px;
	background-color: white;

	.neg {
		color: #e31515;
	}
	.pos {
		color: #148727;
	}
`;

export const BalanceTitle = styled.div`
	text-align: center;
`;

import * as React from 'react';
import * as S from './styles';
import styled, { css } from 'styled-components';

import gsap from 'gsap';

import Image from 'next/image';

type CarouselProps = {
	slides: any[];
};

const Carousel = () => {
	// buttons
	const prevButton = React.useRef<HTMLButtonElement>(undefined!);
	const nextButton = React.useRef<HTMLButtonElement>(undefined!);
	const arrowG = React.useRef<SVGGElement[]>([]);
	const addArrowG = (el: SVGGElement) => {
		if (!arrowG.current.includes(el)) arrowG.current.push(el);
	};

	// slides
	const container = React.useRef<HTMLDivElement>(undefined!);
	const slides = React.useRef<HTMLDivElement[]>([]);
	const slideRef = (el: HTMLDivElement) => {
		if (!slides.current.includes(el)) slides.current.push(el);
	};

	// dots
	const dots = React.useRef<HTMLUListElement>(undefined!);

	const [timelines] = React.useState(() => ({
		prevButtonTimeline: gsap.timeline({ paused: true }),
		nextButtonTimeline: gsap.timeline({ paused: true }),
		sliderTimeline: gsap.timeline({
			paused: true,
			onComplete: function () {
				this.restart().pause();
			},
		}),
	}));

	const carouselData = React.useRef<any[]>([...gallery]);

	const sortArray = React.useCallback(
		(array: any[], isNext = false): ReturnType<gsap.Callback> => {
			if (isNext) {
				const [first, ...rest] = [...array];
				carouselData.current = [...rest, first];
			} else {
				let data = [...array];
				data.unshift(data.splice(array.length - 1, 1)[0]);
				carouselData.current = data;
			}
		},
		[],
	);
	const init = React.useCallback(() => {
		gsap.set(container.current, { perspective: 1000 });

		const getButtonAnimation = () => ({ x: 0, ease: 'power2.easeInOut' });
		gsap.set(arrowG.current, { x: -35 });

		const prevButtonSelector = gsap.utils.selector(prevButton);
		const nextButtonSelector = gsap.utils.selector(nextButton);
		timelines.prevButtonTimeline
			.to(prevButtonSelector('g'), getButtonAnimation(), '-=0.3')
			.duration(0.3);

		timelines.nextButtonTimeline
			.to(nextButtonSelector('g'), getButtonAnimation(), '-=0.3')
			.duration(0.3);

		const getScale = (inOrOut: 'in' | 'out'): gsap.TweenVars =>
			inOrOut === 'in'
				? {
						scale: 0.5,
						ease: 'cubic.easeIn',
				  }
				: { scale: 0.5, ease: 'cubic.easeOut' };

		const getRotation = (toOrFrom: 'to' | 'from'): gsap.TweenVars =>
			toOrFrom === 'to'
				? { xPercent: -100, rotationY: 80 }
				: { xPercent: 100, rotationY: -80 };

		slides.current.forEach((slide, i) => {
			if (document) {
				const dot = document.createElement('li');
				if (i === 0) dot.classList.add('active');
			}

			timelines.sliderTimeline.addPause(slide.id);
			if (i !== slides.current.length - 1) {
				timelines.sliderTimeline
					.to(slides.current[i], getScale('out'))
					.to(slides.current[i], getRotation('to'), 'L' + i)
					.from(slides.current[i + 1], getRotation('from'), 'L' + i)
					.from(slides.current[i + 1], getScale('in'));
			}
		});
	}, [
		timelines.nextButtonTimeline,
		timelines.prevButtonTimeline,
		timelines.sliderTimeline,
	]);
	React.useEffect(() => {
		init();
	}, [init]);

	const handle = {
		prevButton: {
			click: () => {
				console.log('timelines.sliderTimeline: ', timelines.sliderTimeline);
				timelines.sliderTimeline.reverse();
			},
			mouseEnter: () => timelines.prevButtonTimeline.play(),
			mouseLeave: () => timelines.prevButtonTimeline.reverse(),
		},
		nextButton: {
			click: () => timelines.sliderTimeline.play(),
			mouseEnter: () => timelines.nextButtonTimeline.play(),
			mouseLeave: () => timelines.nextButtonTimeline.reverse(),
		},
		dot: (e: any) => console.log(e),
	};
	const controls = {
		prev: (
			<S.Button
				prev
				ref={prevButton}
				onMouseEnter={handle.prevButton.mouseEnter}
				onMouseLeave={handle.prevButton.mouseLeave}
				onClick={handle.prevButton.click}
			>
				<S.ButtonContainer prev>
					<Arrow prev ref={addArrowG} />
					<S.ButtonTitle>Prev</S.ButtonTitle>
				</S.ButtonContainer>
			</S.Button>
		),
		next: (
			<S.Button
				ref={nextButton}
				onMouseEnter={handle.nextButton.mouseEnter}
				onMouseLeave={handle.nextButton.mouseLeave}
				onClick={handle.nextButton.click}
			>
				<S.ButtonContainer>
					<Arrow ref={addArrowG} />
					<S.ButtonTitle>Next</S.ButtonTitle>
				</S.ButtonContainer>
			</S.Button>
		),
	};

	return (
		<S.CarouselContainer ref={container}>
			{controls.prev}
			{controls.next}
			{carouselData.current.map((slide) => (
				<S.Box key={slide.title} ref={slideRef} id={slide.title}>
					<span>{slide.title}</span>
					<div></div>
					<Image
						src={slide.cover}
						layout="responsive"
						alt={slide.title}
						width={100}
						height={80}
					/>
				</S.Box>
			))}
			<S.Dots ref={dots} className="dots" />
		</S.CarouselContainer>
	);
};

export default Carousel;

const gallery = [
	{
		title: 'title one',
		cover:
			'https://images.unsplash.com/photo-1617643049820-f072111ac920?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
	},
	{
		title: 'title two',
		cover:
			'https://images.unsplash.com/photo-1617643606475-99ad26026885?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
	},
];

const Arrow = React.forwardRef<SVGGElement, { prev?: boolean }>(
	({ prev }, ref) => (
		<S.ArrowSvg
			prev={prev}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 71 15"
		>
			<g ref={ref}>
				<polyline
					id="large-arrow__head"
					points="43 2.775 49.125 7.5 43 12.5"
					fill="none"
					stroke="white"
					strokeMiterlimit="10"
				/>
				<rect x="1" y="7" width="46.5" height="1" fill="white" />
			</g>
		</S.ArrowSvg>
	),
);
Arrow.displayName = 'Arrow';

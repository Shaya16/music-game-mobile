import React from "react";
import Svg, { Path, Text } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
	return (
		<Svg
			id="prefix__BACKGROUND_2"
			x={0}
			y={0}
			viewBox="0 0 312.37 114.12"
			xmlSpace="preserve"
			{...props}
		>
			<Path
				d="M300.37 114.12H12c-6.6 0-12-5.4-12-12V12C0 5.4 5.4 0 12 0h288.37c6.6 0 12 5.4 12 12v90.12c0 6.6-5.4 12-12 12z"
				fill="#f7d237"
			/>
			<Path
				d="M293.92 106.28H18.45c-10.15 0-18.45-5.4-18.45-12v7.83c0 6.6 8.3 12 18.45 12h275.46c10.15 0 18.45-5.4 18.45-12v-7.83c.01 6.6-8.29 12-18.44 12z"
				fill="#ffdc7b"
			/>
			<Path
				d="M18.45 7.83h275.46c10.15 0 18.45 5.4 18.45 12V12c0-6.6-8.3-12-18.45-12H18.45C8.3 0 0 5.4 0 12v7.83c0-6.6 8.3-12 18.45-12z"
				fill="#e2c159"
			/>
			<Text
				transform="translate(104.61 81.905)"
				className="prefix__st4 prefix__st5"
				opacity={0.25}
				fill="#fff8e1"
			>
				{"PLAY"}
			</Text>
			<Text
				transform="translate(102.21 79.252)"
				className="prefix__st4 prefix__st5"
				opacity={0.02}
			>
				{"PLAY"}
			</Text>
			<Text
				transform="translate(103.22 80.768)"
				className="prefix__st4 prefix__st5"
				fill="#fff"
			>
				{"PLAY"}
			</Text>
			<Text
				transform="translate(136.59 97.58)"
				className="prefix__st4"
				fontSize={12}
				fill="#fff8e1"
			>
				{"1 VS 1 Mode"}
			</Text>
		</Svg>
	);
}

export default SvgComponent;

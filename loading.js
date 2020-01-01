import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Loading extends React.Component {
	render() {
		return (
			<ImageBackground
				source={require("./assets/loading-bg.png")}
				style={{
					width: "100%",
					height: "100%",
					alignItems: "center"
				}}
			>
				<LottieView
					source={require("./assets/animations/lf30_editor_YST8D9.json")}
					autoPlay
					width={500}
					style={{ position: "relative" }}
				/>
				<Text style={{ fontFamily: "kaki", fontSize: 24, color: "#052628" }}>
					SEARCHING FOR PLAYERS...
				</Text>

				<Text
					style={{
						fontFamily: "kaki",
						fontSize: 16,
						color: "#052628",
						textAlign: "center",
						top: 10
					}}
				>
					TIP: REMEMBER THE LAST NOTE YOUV'E CLICKED SO YOU WOULD KNOW THE
					NEXT'S LOCATION
				</Text>
			</ImageBackground>
		);
	}
}

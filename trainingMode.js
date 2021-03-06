import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
	StyleSheet,
	View,
	TextInput,
	ImageBackground,
	Animated,
	Text,
	AsyncStorage,
	StatusBar
} from "react-native";
import Piano from "./piano";
import { play } from "./piano";
import * as Font from "expo-font";
import Fade from "react-native-fade";
import LottieView from "lottie-react-native";
import io from "socket.io-client";
import Loading from "./loading";
import * as Animatable from "react-native-animatable";
import { NavigationEvents } from "react-navigation";

//const socket = io("https://music-game-server.herokuapp.com/")

export default class TrainingMode extends React.Component {
	unloaded = false;

	constructor(props) {
		super(props);

		// backgroundColor
		this.state = {
			timer: false,
			fontLoaded: true,
			lockKeboard: true,
			roundWinnerName: "SHAIDRAI",
			showRoundWinner: false,
			note: 5,
			record: 0,
			userPoints: 0
		};
		this.onClickNote = this.onClickNote.bind(this);
		// preload sounds
	}

	pianoEffect = ref => (this.piano = ref);

	// Font loading
	async componentDidMount() {
		const record = this.props.navigation.state.params.record;
		if (record) this.setState({ record: parseInt(record) });

		this.newRound(Math.floor(Math.random() * 11));
	}

	componentWillUnmount() {
		this.unloaded = true;
	}

	onClickNote(answer) {
		if (answer) {
			this.setState({ userPoints: this.state.userPoints + 10 });

			if (this.state.userPoints + 10 > this.state.record) {
				this.setState({ record: this.state.userPoints + 10 });
				AsyncStorage.setItem(
					"trainingRecord",
					(this.state.userPoints + 10).toString()
				);
			}
		} else this.setState({ userPoints: 0 });
		this.setState({ lockKeboard: true });

		if (!this.state.unloaded) this.newRound(Math.floor(Math.random() * 11));
	}

	newRound(note) {
		if (!this.unloaded) {
			this.setState({ timer: true, note: note });
			setTimeout(() => {
				if (!this.unloaded) {
					this.setState({ lockKeboard: false, timer: false });
					play(note);
				}
			}, 3000);
		}
	}

	render() {
		return (
			<View>
				<StatusBar
					hidden={true}
					barStyle="light-content"
					backgroundColor="rgb(122,77,246)"
				/>

				<ImageBackground
					source={require("./assets/bg-tut3.png")}
					style={{
						width: "100%",
						height: "100%"
					}}
				>
					<View
						style={{
							flexDirection: "column",
							alignContent: "center",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						<View
							style={{
								borderColor: "white",
								top: 20,
								padding: 20
							}}
						>
							{this.state.fontLoaded ? (
								<Text
									style={{
										fontFamily: "kaki",
										fontSize: 18,
										color: "#063348cc",
										padding: 5
									}}
								>
									Your Record: {this.state.record}
								</Text>
							) : null}
						</View>
						<View>
							{this.state.fontLoaded ? (
								<ImageBackground
									source={require("./assets/points-cloud.png")}
									style={{
										width: 160,
										height: 95,
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									<Text
										style={{
											fontFamily: "kaki",
											fontSize: 36,
											color: "#063348",
											padding: 5,
											paddingTop: 20
										}}
									>
										{this.state.userPoints}
									</Text>
								</ImageBackground>
							) : null}
						</View>
					</View>
					<View
						style={{
							flexDirection: "column",
							flex: 2,
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						{this.state.timer ? (
							<LottieView
								source={require("./8803-simple-countdown.json")}
								autoPlay
								width={300}
								style={{ position: "relative" }}
							/>
						) : null}
					</View>
					<Animatable.View
						ref={this.pianoEffect}
						style={{ width: "100%", height: 231 }}
					>
						<Piano
							onClickNote={this.onClickNote}
							note={this.state.note}
							showRightAnswer={true}
							test={this.test}
						/>
					</Animatable.View>
					{this.state.lockKeboard ? (
						<View
							style={{
								position: "absolute",
								height: 350,
								width: "100%",
								bottom: 0,
								opacity: 0.5
							}}
						></View>
					) : null}
				</ImageBackground>
				<NavigationEvents
					onWillFocus={() => {
						this.piano.slideInUp();
					}}
				/>
			</View>
		);
	}
}

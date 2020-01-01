import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
	StyleSheet,
	View,
	TextInput,
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

//const socket = io("https://music-game-server.herokuapp.com/")

export default class Game extends React.Component {
	socket = io("http://192.168.1.104:5000");

	constructor(props) {
		super(props);

		this.params = this.props.navigation.state.params;
		// backgroundColor
		this.state = {
			timer: false,
			fontLoaded: true,
			lockKeboard: true,
			roundWinnerName: "",
			showRoundWinner: true,
			note: 5,
			loading: true,

			user1Points: 0,
			user2Points: 0,
			user2Name: ""
		};
		this.onClickNote = this.onClickNote.bind(this);
		// preload sounds
	}

	// Font loading
	async componentDidMount() {
		// Sockets Events handling

		this.socket.emit("join", this.params.name);

		this.socket.on("start", note => {
			this.setState({ loading: false });
			this.newRound(note);
		});

		this.socket.on("roundwinner", winner => {
			this.roundWinner(winner.winner);
			this.setState({ user1Points: winner.user1, user2Points: winner.user2 });
		});

		this.socket.on("nowinner", loosers => {
			this.roundWinner("NO ONE!");
			this.setState({ user1Points: loosers.user1, user2Points: loosers.user2 });
		});

		this.socket.on("roundstart", note => {
			this.newRound(note);
		});

		this.socket.on("users", users => {
			this.setState({ user2Name: users[1] });
		});

		this.socket.on("disconnect", () => {
			console.log("disconnected");
		});

		// Internet Error
	}

	componentWillUnmount() {
		this.socket.close();
	}

	onClickNote(answer) {
		if (answer) this.socket.emit("answer", "correct");
		else {
			this.socket.emit("answer", "wrong");
			console.log("wrong");
		}

		this.setState({ lockKeboard: true });
	}

	roundWinner(name) {
		this.setState({
			roundWinnerName: name,
			showRoundWinner: true,
			lockKeboard: true
		});
	}

	newRound(note) {
		this.setState({ timer: true, note: note });
		setTimeout(() => {
			this.setState({
				showRoundWinner: false,
				lockKeboard: false,
				timer: false
			});
			play(note);
		}, 3000);
	}

	render() {
		return (
			<View>
				<StatusBar
					hidden={true}
					barStyle="light-content"
					backgroundColor="rgb(122,77,246)"
				/>

				{this.state.loading ? (
					<Loading />
				) : (
					<LinearGradient
						colors={["#192f6a", "#268cdc", "#94d0ff"]}
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: "#94d0ff"
						}}
					>
						<View style={{ flexDirection: "row" }}>
							<View
								style={{
									borderColor: "white",
									borderWidth: 5,
									top: 70,
									borderRadius: 150,
									backgroundColor: "rgb(255, 144, 236)",
									alignSelf: "flex-start",
									alignItems: "center",
									justifyContent: "center"
								}}
							>
								{this.state.fontLoaded ? (
									<Text
										style={{
											fontFamily: "kaki",
											fontSize: 25,
											alignSelf: "flex-start",
											padding: 5
										}}
									>
										{this.props.navigation.state.params.name}:{" "}
										{this.state.user1Points}
									</Text>
								) : null}
							</View>
							<View
								style={{
									borderColor: "white",
									borderWidth: 5,
									marginLeft: "auto",
									top: 70,
									borderRadius: 150,
									backgroundColor: "rgb(154, 255, 153)",
									alignSelf: "flex-start",
									lignItems: "center",
									justifyContent: "center"
								}}
							>
								{this.state.fontLoaded ? (
									<Text
										style={{
											fontFamily: "kaki",
											fontSize: 25,
											alignSelf: "flex-start",
											padding: 5
										}}
									>
										{this.state.user2Name}: {this.state.user2Points}
									</Text>
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

							{this.state.showRoundWinner ? (
								<View
									style={{
										position: "absolute",
										borderRadius: 30,
										borderColor: "white",
										borderWidth: 5,
										width: "100%",
										alignSelf: "flex-start",
										zIndex: 3,
										backgroundColor: "#f6ff64"
									}}
								>
									<Text
										style={{
											paddingTop: 10,
											fontFamily: "kaki",
											fontSize: 25,
											textAlign: "center"
										}}
									>
										THE WINNER OF THE ROUND IS
									</Text>
									<Text
										style={{
											paddingBottom: 10,
											fontFamily: "kaki",
											fontSize: 60,
											textAlign: "center"
										}}
									>
										{this.state.roundWinnerName}
									</Text>
								</View>
							) : null}
						</View>

						<Piano onClickNote={this.onClickNote} note={this.state.note} />
						{this.state.lockKeboard ? (
							<View
								style={{
									position: "absolute",
									height: 350,
									width: "100%",
									bottom: 0,
									opacity: 0.2
								}}
							></View>
						) : null}
					</LinearGradient>
				)}
			</View>
		);
	}
}

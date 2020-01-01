import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
	StyleSheet,
	View,
	TextInput,
	Animated,
	Text,
	AsyncStorage,
	Image,
	StatusBar,
	ImageBackground
} from "react-native";
import LottieView from "lottie-react-native";
import {
	Container,
	Header,
	Content,
	Footer,
	FooterTab,
	Button
} from "native-base";
import * as Font from "expo-font";
import Game from "./game";
import Dialog from "react-native-dialog";
import io from "socket.io-client";
import * as Animatable from "react-native-animatable";
import { NavigationEvents } from "react-navigation";
import Svg from "./svg";
export default class First extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fontLoaded: false,
			namePopup: false,
			bar: false,
			opacity: 0
		};
	}

	navbar = ref => (this.nav = ref);
	button1 = ref => (this.view1 = ref);
	button2 = ref => (this.view2 = ref);
	button3 = ref => (this.view3 = ref);

	// training record
	record = undefined;

	startingEffect() {
		if (this.state.bar) this.nav.slideInDown(1000);

		this.view1.bounceInRight(800);

		this.view2.bounceInLeft(800, 200);

		this.view3.zoomIn(800, 400);
	}

	async componentDidMount() {
		await Font.loadAsync({
			kaki: require("./assets/fonts/CarterOne-Regular.ttf")
		});
		this.setState({ fontLoaded: true });
		AsyncStorage.getItem("name");
		const name = await AsyncStorage.getItem("name");
		if (name) this.setState({ name, bar: true });

		// get training record
		this.record = await AsyncStorage.getItem("trainingRecord");
	}

	componentWillUnmount() {
		this.navigateEffect();
	}

	async checkName() {
		if (this.state.name) {
			this.props.navigation.navigate("Game", { name: this.state.name });
		} else this.setState({ namePopup: true });
	}

	async enterName() {
		if (this.state.name) {
			AsyncStorage.setItem("name", this.state.name);
			this.setState({ namePopup: false, bar: true });
			this.props.navigation.navigate("Game", { name: this.state.name });
		}
	}

	navigateEffect() {
		if (this.state.bar) this.nav.slideOutUp(1000);

		this.view1.bounceOutLeft(800);

		this.view2.bounceOutRight(800);

		this.view3.zoomOut(800, 200);
	}

	render() {
		return (
			<ImageBackground
				source={require("./assets/bg-logo.png")}
				style={{
					width: "100%",
					height: "100%"
				}}
			>
				<StatusBar
					hidden={false}
					barStyle="light-content"
					backgroundColor="rgb(122,77,246)"
				/>
				{this.state.bar ? (
					<Animatable.View
						ref={this.navbar}
						style={{ position: "absolute", top: 0, zIndex: 2 }}
					>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: "#d3f2ff80",
								height: 100,
								width: "100%",
								shadowColor: "#000",

								elevation: 10,
								top: 0
							}}
						>
							<Text
								style={{
									fontFamily: "kaki",
									top: 50,
									fontSize: 20,
									opacity: 1,
									left: 5,
									color: "#052628"
								}}
							>
								{this.state.name}
							</Text>

							<Text
								style={{
									fontFamily: "kaki",
									top: 50,
									fontSize: 20,
									marginLeft: "auto",
									right: 10,
									color: "#052628"
								}}
							>
								WINS: 5
							</Text>
						</View>
					</Animatable.View>
				) : null}

				<View
					style={{
						position: "absolute",
						top: 350,
						left: 0,
						right: 0,
						bottom: 0,
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Animatable.View ref={this.button1}>
						<Button
							onPress={() => this.checkName()}
							style={{
								backgroundColor: "#eacc5a",
								textAlign: "center",
								shadowColor: "#000",
								marginBottom: 30,
								borderRadius: 5,
								shadowOffset: {
									width: 0,
									height: 7
								},
								shadowOpacity: 0.41,
								shadowRadius: 9.11,

								elevation: 14
							}}
						>
							<Image
								source={require("./assets/play.png")}
								style={{ width: 250, height: 104 }}
							></Image>
						</Button>
					</Animatable.View>

					<View style={{ height: "2%" }}></View>
					<View>
						<Animatable.View ref={this.button2}>
							<Button
								onPress={() => {
									this.navigateEffect();
									setTimeout(() => {
										this.props.navigation.navigate("TrainingMode", {
											record: this.record
										});
									}, 700);
								}}
								style={{
									textAlign: "center",
									borderRadius: 10,
									marginVertical: 10,
									shadowColor: "#000",
									shadowOffset: {
										width: 0,
										height: 7
									},
									shadowOpacity: 0.41,
									shadowRadius: 9.11,

									elevation: 14
								}}
							>
								<Image
									source={require("./assets/training.png")}
									style={{ width: 200, height: 45 }}
								></Image>
							</Button>
						</Animatable.View>

						<Animatable.View ref={this.button3}>
							<Button
								style={{
									shadowColor: "#000",
									borderRadius: 10,
									justifyContent: "center",
									marginVertical: 10,
									shadowOffset: {
										width: 0,
										height: 7
									},
									shadowOpacity: 0.41,
									shadowRadius: 9.11,

									elevation: 14
								}}
							>
								<Image
									source={require("./assets/tutorial.png")}
									style={{ width: 200, height: 45 }}
								></Image>
							</Button>
						</Animatable.View>
					</View>
				</View>

				<Button
					style={{
						backgroundColor: "#063348",
						textAlign: "center",
						padding: 15,
						position: "absolute",
						bottom: 20,
						borderRadius: 20,
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 7
						},
						shadowOpacity: 0.41,
						shadowRadius: 9.11,

						elevation: 14
					}}
				>
					<Text
						style={{
							fontFamily: "kaki",
							fontSize: 12,
							textAlign: "center",
							color: "white"
						}}
					>
						CREDITS
					</Text>
				</Button>

				<View>
					<Dialog.Container visible={this.state.namePopup} style={{}}>
						<Dialog.Title
							style={{
								fontFamily: "kaki",
								alignSelf: "center",
								color: "#f5d45b"
							}}
						>
							Enter Your Nickname
						</Dialog.Title>

						<Dialog.Input
							onChangeText={name => this.setState({ name })}
							style={{
								borderBottomWidth: 1,
								backgroundColor: "#88888821",
								borderColor: "lightgrey",
								fontFamily: "kaki",
								borderRadius: 20
							}}
						>
							{" "}
						</Dialog.Input>
						<Dialog.Button
							style={{ fontFamily: "kaki", color: "#063348" }}
							label="Cancel"
							onPress={() => this.setState({ namePopup: false })}
						/>
						<Dialog.Button
							style={{ fontFamily: "kaki", color: "#063348" }}
							label="OK"
							onPress={() => {
								this.enterName();
							}}
						/>
					</Dialog.Container>
				</View>

				<NavigationEvents
					onWillFocus={() => {
						this.startingEffect();
					}}
				/>
			</ImageBackground>
		);
	}
}

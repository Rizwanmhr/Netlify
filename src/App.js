import React, { useState } from "react"
import Header from "./components/header/Header"
import HeroSection from "./components/hero-section/HeroSection"
import Sites from "./components/sites/Sites"
import { Box, createTheme, ThemeProvider } from "@mui/material"

const App = () => {
	const [mode, setMode] = useState("light")

	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	})
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<Box bgcolor={"background.default"} color={"text.primary"}>
					<Header setMode={setMode} mode={mode} />
					<Box mt={4} px={{ xs: 2, md: 20 }}>
						<HeroSection setMode={setMode} mode={mode} />
					</Box>
					<Box mt={2} px={{ xs: 2, md: 20 }}>
						<Sites />
					</Box>
				</Box>
			</ThemeProvider>
		</>
	)
}
export default App

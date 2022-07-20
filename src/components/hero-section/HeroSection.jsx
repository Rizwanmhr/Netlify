import React from "react"
import {
	Stack,
	Grid,
	Card,
	Box,
	CardHeader,
	CardContent,
	Typography,
	Button,
} from "@mui/material"
import right from "../../assets/images/right.PNG"
import AcUnitIcon from "@mui/icons-material/AcUnit"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import Sites from "../sites/Sites"

const HeroSection = ({setMode,mode}) => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item lg={9}>
					<Card>
						<CardContent>
							<Stack>
								<Stack
									direction={{ xs: "column", sm: "row" }}
									justifyContent='space-between'
								>
									<Stack direction='row' spacing={1}>
										<Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
											RandyGovsoft's team
										</Typography>
										<Button
											sx={{ background: "#E8EBED", color: "#000", borderRadius: "5px" }}
										>
											Starter
										</Button>
									</Stack>
									<Typography sx={{ fontSize: "14px", color: "#676C85" }}>
										Current usage period (Jun 13 to Jul 13)
									</Typography>
								</Stack>
								<Stack mt={3} direction='row' spacing={1}>
									<Typography sx={{ fontSize: "14px", color: "#676C85" }}>
										Welcome to Netlify
									</Typography>
									<AcUnitIcon />
								</Stack>
								<Grid container spacing={1} mt={2}>
									<Grid item xs={6} lg={3}>
										<Card>
											<CardHeader
												sx={{ background: "#E8EBED", borderRadius: "10px 10px 0px 0px" }}
											/>
											<CardContent sx={{ background: "#E8EBED" }}>
												<Stack direction='row' justifyContent='space-between'>
													<Typography>Bandwidth used</Typography>
													<ArrowRightAltIcon />
												</Stack>

												<Typography>
													<span style={{ fontWeight: "bold", fontSize: "20px" }}>3MB</span>
													/100 GB
												</Typography>
											</CardContent>
										</Card>
									</Grid>
									<Grid item xs={6} lg={3}>
										<Card>
											<CardHeader
												sx={{ background: "#E8EBED", borderRadius: "10px 10px 0px 0px" }}
											/>
											<CardContent sx={{ background: "#F2F5F8" }}>
												<Stack direction='row' justifyContent='space-between'>
													<Typography>Build minutes used</Typography>
													<ArrowRightAltIcon />
												</Stack>

												<Typography>
													<span style={{ fontWeight: "bold", fontSize: "20px" }}>9</span>/300
												</Typography>
											</CardContent>
										</Card>
									</Grid>
									<Grid item xs={6} lg={3}>
										<Card>
											<CardHeader
												sx={{ background: "#E8EBED", borderRadius: "10px 10px 0px 0px" }}
											/>
											<CardContent sx={{ background: "#F2F5F8" }}>
												<Stack direction='row' justifyContent='space-between'>
													<Typography>Concurrent builds</Typography>
													<ArrowRightAltIcon />
												</Stack>

												<Typography>
													<span style={{ fontWeight: "bold", fontSize: "20px" }}>0</span>/1
												</Typography>
											</CardContent>
										</Card>
									</Grid>
									<Grid item xs={6} lg={3}>
										<Card>
											<CardHeader
												sx={{ background: "#E8EBED", borderRadius: "10px 10px 0px 0px" }}
											/>
											<CardContent sx={{ background: "#F2F5F8" }}>
												<Stack direction='row' justifyContent='space-between'>
													<Typography>Team Members</Typography>
													<ArrowRightAltIcon />
												</Stack>

												<Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
													1
												</Typography>
											</CardContent>
										</Card>
									</Grid>
								</Grid>
							</Stack>
						</CardContent>
					</Card>
				</Grid>
				<Grid item lg={3} xs={12}>
					<img src={right} alt='right' style={{ height: "275px", width: "100%" }} />
				</Grid>
			</Grid>
			{/* <Box mt={2}>
				<Sites />
			</Box> */}
		</>
	)
}
export default HeroSection

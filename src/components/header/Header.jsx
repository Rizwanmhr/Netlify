import React, { useState } from "react"
import { AppBar, Box, Stack, Typography, Avatar, Switch } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import NotificationAddIcon from "@mui/icons-material/NotificationAdd"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import logo from "../../assets/images/logo.png"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
const pages = ["One", "Two", "Three"]

const Header = ({ setMode, mode }) => {
	const [allPages, setAllPages] = useState(null)
	const handleOpenNavMenu = (event) => {
		setAllPages(event.currentTarget)
	}
	const handleCloseNavMenu = () => {
		setAllPages(null)
	}
	return (
		<>
			<AppBar
				sx={{
					backgroundColor: "#ffffff",
					marginTop: "2rem",
					boxShadow: "none",
					position: "static",
				}}
			>
				<Stack
					direction='row'
					justifyContent='space-between'
					px={{ xs: 2, md: 20 }}
				>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton size='large' color='inherit' onClick={handleOpenNavMenu}>
							<MenuIcon color={"text.primary"} />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={allPages}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={allPages}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Stack direction='row' alignItems='center' spacing={3}>
						<img src={logo} alt='logo' sx={{ display: { xs: "none", md: "flex" } }} />
						<Typography
							sx={{
								color: "#000",
								fontWeight: "bold",
								fontSize: "20px",
								display: { xs: "none", md: "flex" },
							}}
						>
							RandyGovsoft's team
						</Typography>
					</Stack>
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='space-between'
						spacing={3}
					>
						<Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")} />
						<Stack
							direction='row'
							alignItems='center'
							justifyContent='space-between'
							spacing={3}
							sx={{ display: { xs: "none", md: "flex" } }}
						>
							<SearchIcon color='primary' />
							<NotificationAddIcon color='primary' />
							<AccountCircleIcon color='primary' />
							<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
						</Stack>
					</Stack>
				</Stack>
				<Stack
					direction={{ xs: "column", md: "row" }}
					alignItems='center'
					spacing={3}
					mt={2}
					px={{ xs: 2, md: 20 }}
				>
					<Typography sx={{ color: "#000", textDecoration: "underline" }}>
						Team overview
					</Typography>
					<Typography sx={{ color: "#054861" }}>Sites</Typography>
					<Typography sx={{ color: "#054861" }}>Builds</Typography>
					<Typography sx={{ color: "#054861" }}>Plugins</Typography>
					<Typography sx={{ color: "#054861" }}>Domains</Typography>
					<Typography sx={{ color: "#054861" }}>Members</Typography>
					<Typography sx={{ color: "#054861" }}>Audit log</Typography>
					<Typography sx={{ color: "#054861" }}>Billing</Typography>
					<Typography sx={{ color: "#054861" }}>Team settings</Typography>
				</Stack>
			</AppBar>
		</>
	)
}
export default Header

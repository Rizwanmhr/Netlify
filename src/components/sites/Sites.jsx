import React from 'react'
import {
	Stack,
	Grid,
	Card,
	CardContent,
	Typography,
    Divider,
	Button
} from "@mui/material"
import site from "../../assets/images/site.PNG"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sites = () => {
    return(
        <>
        <Grid container spacing={2}>
            <Grid item lg={7} xs={12}>
                <Card>
                    <CardContent>
                        <Stack direction='row' justifyContent='space-between'>
                        <Stack direction='row' alignItems='center' spacing={1}>
                            <Typography sx={{fontSize:'20px',fontWeight:'bold',textDecoration:'underline'}}>Sites</Typography>
                             <ArrowRightAltIcon />
                       
                        </Stack>
                        <Button endIcon={<KeyboardArrowDownIcon />} sx={{background:"#676C85",color:'#fff',textTransform:'capitalize'}}>
                                Add new site
                         </Button>
                        </Stack>
                        <Divider />
                        <Stack mt={3} direction='row' justifyContent='space-between' alignItems='center'>
                        <Stack direction='row' spacing={1}>
                        <img src={site} alt='site' />
                        <Stack>
                        <Typography mt={3} fontSize={{xs:'10px',lg:'20px'}} fontWeight='bold'>sensational-cheesecake-12345</Typography>
                        <Typography>Deploy's from Github</Typography>
                        </Stack>
                        </Stack>
                        <ArrowRightAltIcon />
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={5} xs={12} md={12} sm={12}>
         
            <Stack direction='row'  mt={2.5} alignItems='center' spacing={1}>
                <Typography fontSize='20px' fontWeight='bold' sx={{textDecoration:'underline',textDecorationOffSet:'2px'}}>Builds</Typography>
                <ArrowRightAltIcon />
            </Stack>
            <Divider />
            <Stack>
             <Card>
                <CardContent>
                <Stack mt={3} direction='row' justifyContent='space-between' alignItems='center'>
                  <Stack>
                        <Typography fontSize='16px' fontWeight='bold'>sensational-cheesecake-12345 <span  style={{background:'#57e6e1',borderRadius:'10px', padding:'5px'}}>Completed</span></Typography>
                        <Divider />
                         <Typography color="#676C85">Production: main@Head</Typography>
                </Stack>
                    <ArrowRightAltIcon />
                </Stack>
                <Stack mt={2} direction='row' justifyContent='space-between' alignItems='center'>
                  <Stack>
                        <Typography fontSize='16px' fontWeight='bold'>sensational-cheesecake-12345 <span  style={{background:'#ff8cb1',borderRadius:'10px', padding:'5px'}}>Failed</span></Typography>
                        <Divider />
                         <Typography color="#676C85">Production: main@Head</Typography>
                </Stack>
                    <ArrowRightAltIcon />
                </Stack>
                <Stack mt={2} direction='row' justifyContent='space-between' alignItems='center'>
                  <Stack>
                        <Typography fontSize='16px' fontWeight='bold'>sensational-cheesecake-12345 <span  style={{background:'#ff8cb1',borderRadius:'10px', padding:'5px'}}>Failed</span></Typography>
                        <Divider />
                         <Typography color="#676C85">Production: main@Head</Typography>
                </Stack>
                    <ArrowRightAltIcon />
                </Stack>
                <Stack mt={2} direction='row' justifyContent='space-between' alignItems='center'>
                  <Stack>
                        <Typography fontSize='16px' fontWeight='bold'>sensational-cheesecake-12345 <span  style={{background:'#ff8cb1',borderRadius:'10px', padding:'5px'}}>Failed</span></Typography>
                        <Divider />
                         <Typography color="#676C85">Production: main@Head</Typography>
                </Stack>
                    <ArrowRightAltIcon />
                </Stack>
                </CardContent>
             </Card>
            </Stack>
            </Grid>
        </Grid>
        </>
    )
}
export default Sites
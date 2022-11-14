import { Grid, Box, Container, CssBaseline, ThemeProvider, Typography, Link, IconButton} from '@mui/material';
import * as React from 'react';
import { ThemeRed } from '../components/Theme';
import LowerNavbar from '../components/LowerNavbar';
import logo from '../images/profile.png';
import StarIcon from '@mui/icons-material/StarBorderOutlined';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import BagIcon from '@mui/icons-material/ShoppingBagOutlined';
import SettingIcon from '@mui/icons-material/SettingsOutlined';


export default function Profile() {
    
    var name = "Bejo Jaya"
    var jurusan = "SAINTEK"
    var sekolah = "SMAN 1 Bekasi"
    var email = "bejo12@gmail.com"
    var phone = "081234567890" 



    return(
        <ThemeProvider theme={ThemeRed}>
            <CssBaseline />
            <Container  component="main" sx={{padding:'0'}}>
                <Box sx={{flexDirection:'column', backgroundColor:'red', borderRadius: '10px'}}>
                    <Grid container sx={{padding:'25px 10px 10px 10px'}}>
                        <Grid item xs={3}>
                            <img src={logo} style={{maxWidth:"4vw", height:"auto"}}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variants='p' fontWeight='bold'>{name}</Typography>
                            <Typography variants='p'>{jurusan}</Typography>
                            <Typography variants='p'>{sekolah}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton  href="/">
                                <SettingIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container  sx={{textAlign:'center', borderTop: 1, padding:'5px'}} >
                        <Grid item xs={6}>
                            <Typography variants='p'>Email</Typography>
                            <Typography variants='p'>{email}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variants='p'>No. HP</Typography>
                            <Typography variants='p'>{phone}</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{flexDirection:'column'}}>
                    
                    <Grid container sx={{backgroundColor:'lightgrey', borderRadius: 2, padding:'15px 5px', marginTop:'10px'}}>
                        <Grid item xs={11}>
                            <Link href = "/histori/materi"><Typography variants='p' fontWeight='bold'>Riwayat Materi</Typography></Link>
                        

                    
                        </Grid>

                        <Grid item xs={1} sx={{textAlign:'center'}}>
                            <BagIcon />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <LowerNavbar />
        </ThemeProvider>
    )
}
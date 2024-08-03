import React from 'react'
import {Stack ,Typography,Button,IconButton} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import F from '../Assets/icon/F.svg'
import T from '../Assets/icon/T.svg'
import I from '../Assets/icon/I.svg'
import RS from './RS';
const Buttom = (props) => {
  return (
    <Stack mt={8} direction='column' spacing='5' style={{alignItems:'center'}}>
        <Typography variant='h4'  style={{fontWeight:'bold',fontFamily:'Rosarivo'}}>
        Testimonials
        </Typography>
        <Typography variant='h6'>
        "Calm, Serene, Retro – What a way to relax and enjoy"
        </Typography>
        <Typography >
        Mr. and Mrs. Baxter, UK
        </Typography>
        <Stack  direction='row' spacing={5} style={{marginTop:'20px'}} >
            <Button variant="contained" size="small" style={{background:'#E0B973' }} href={props.right} ><IconButton size='small'><ChevronLeftIcon style={{color:"#FFF", fontSize:'25px'}}/></IconButton></Button>
            <Button variant="contained" size="small" style={{background:'#E0B973' }} href={props.left} ><IconButton size="small"><ChevronRightIcon style={{color:"#FFF", fontSize:'25px'}}/></IconButton></Button>
        </Stack>
        <Stack direction='row' spacing={30} style={{backgroundColor:'#14274A', width:'100%' , marginTop:'50px', height:'250px' ,justifyContent:'space-around'}}>
            <Stack style={{marginTop:'70px',marginLeft:'0px'}}>
                <Typography variant='h5' style={{fontWeight:'bold',fontFamily:'Rosarivo' ,color:'#fff' }}>LUXURY</Typography>
                <Typography variant='body2' style={{fontWeight:'bold',fontFamily:'Rosarivo' ,color:'#fff'}}>HOTELS</Typography>
                <Typography variant='body2' style={{fontWeight:'normal',fontFamily:'Montserrat',color:'#fff' ,marginTop:'15px'}}>497 Evergreen Rd. Roseville, CA 95673<br/>
                            +44 345 678 903<br/>
                            luxury_hotels@gmail.com
                </Typography>
            </Stack>
            <Stack style={{marginTop:'70px',marginLeft:'80px'}} >
            <Typography style={{fontWeight:'bold',fontFamily:'Montserrat',color:'#fff' ,marginTop:'15px'}}>About Us</Typography>
                <Typography style={{fontWeight:'bold',fontFamily:'Montserrat',color:'#fff' ,marginTop:'15px'}}>Contact</Typography>
                <Typography style={{fontWeight:'bold',fontFamily:'Montserrat',color:'#fff' ,marginTop:'15px'}}>Terms & Conditions</Typography>
            </Stack>
            <Stack style={{marginTop:'90px',marginLeft:'80px'}}>
                <RS src={F} href='https://fr-fr.facebook.com/'>Facebook</RS>
                <RS src={T} href='https://twitter.com/'>Twitter</RS>
                <RS src={I} href='https://www.instagram.com/'>Instagram</RS>
            </Stack>
            <Stack style={{marginTop:'90px', marginLeft:'80px'}}>
                <Typography style={{fontWeight:'bold',fontFamily:'Montserrat',color:'#fff' ,marginTop:'15px'}}>Subscribe to our newsletter</Typography>
                <Stack style={{border:'solid 2px #E0B973' ,marginTop:'10px' ,borderRadius:'6px'}} direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography style={{fontWeight:'bold',fontFamily:'Montserrat',color:'#fff',marginLeft:'7px' }}>Email Address</Typography>
                    <Button variant="contained" style={{background:'#E0B973'}}>OK</Button>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default Buttom

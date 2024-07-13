import React from 'react'
import { Typography, Button, Stack } from '@mui/material';
import BodyPartImage from '../assets/assets/icons/body-part.png';
import TargetImage from '../assets/assets/icons/target.png';
import EquipmentImage from '../assets/assets/icons/equipment.png';

const Detail = ({exerciseDetail, instructions}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail //Destrcutring
    const extraDetails = [{
      icon: BodyPartImage,
      name: bodyPart
    },
  {
    icon: TargetImage,
    name: target
  },
  {
    icon: EquipmentImage,
    name: equipment
  }
  ]
  const instructionArray = Object.values(instructions).slice(0, instructions.length); //Converting the array of objects into simple array

 
  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'}, p:'20px', alignItems:'center'}}>
      <img src={gifUrl} alt={name} laoding='lazy' className='detail-image'></img>
      <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
        <Typography variant='h3' textTransform='capitalize'>
            {name}
        </Typography>
        <Typography variant='h6'>
         {instructionArray.map((item, index) =>( <Typography key={index} textTransform='capitalize'><span style={{fontWeight:'600', fontSize:'20px'}}>{index+1}{')'}</span> {item}</Typography>))}
        </Typography>
          {extraDetails.map((item)=>(
            <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
              <Button sx={{background : '#fff2db', borderRadius : '50%', width:'100px', height:'100px'}}>
                <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}} />
              </Button>
                <Typography textTransform='capitalize' variant='h5'>
                  {item.name}
                </Typography>
            </Stack>
          ))}
      </Stack>
    </Stack>
  )
}

export default Detail

import React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [one, setone] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setone(data));
  }, []);
  const [price, setprice] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => setprice(data));
  }, []);
  return (
    <>
    <div className='w-1/2 m-auto h-72'>
      <Accordion className='mt-10' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className='mt-10' aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5 va' className='text-main font-bold wee'>{one?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <h2 variant='h7 vaa' className='text-maingrey wa'>
          {one?.body}
          </h2>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography variant='h5 va' className='text-main font-bold wee'>{one?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 variant='h7 vaa' className='text-maingrey wa'>
          {one?.body}
          </h2>
        </AccordionDetails>
      </Accordion>
      <Accordion className='h-36' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography variant='h5 va' className='text-main font-bold wee'>{one?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <h2 variant='h7 vaa' className='text-maingrey wa'>
          {one?.body}
          </h2>
        </AccordionDetails>
      </Accordion>
      
    </div>
    <br /><br />
    </>
  );
}
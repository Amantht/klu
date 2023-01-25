import {Link} from 'react-router-dom'
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function DisableElevation() {
  return (
    <ButtonGroup
      disableElevation
      size='large'
      variant="contained"
      aria-label="large button group"
    >

<Link to="cse"><Button >CSE</Button></Link>
<Link to="ece"><Button >ECE</Button></Link>
<Link to="me"><Button >ME</Button></Link>
<Link to="bt"><Button >BT</Button></Link>
<Link to="Cal"><Button >Cal</Button></Link>


    </ButtonGroup>
  );
}


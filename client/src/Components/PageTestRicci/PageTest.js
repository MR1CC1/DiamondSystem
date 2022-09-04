import React from 'react'
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

///Pagina para testar components do MUI

const PageTest = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <>
            <Slider
                defaultValue={30}
                sx={{
                    width: 300,
                    color: 'success.main',
                    '& .MuiSlider-thumb': {
                        borderRadius: '1px',
                    },
                }}
            />

            <Switch {...label} defaultChecked />
            <Switch {...label} />
            <Switch {...label} disabled defaultChecked />
            <Switch {...label} disabled />

            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>
                <Alert
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is a success alert — check it out!
                </Alert>
            </Stack>
        </>
    )
}

export default PageTest
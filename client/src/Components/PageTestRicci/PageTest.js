// import React from 'react'
// import Slider from '@mui/material/Slider';
// import Switch from '@mui/material/Switch';
// import Alert from '@mui/material/Alert';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert, { AlertProps } from '@mui/material/Alert';
// import { useState } from 'react';

// //Pagina para testar components do MUI

// // <Switch {...label} defaultChecked />


// const PageTest = () => {
//     const n = 1;
//     const [check, setCheck] = useState(false);

//     const handleChecked = (e) => {
//         setCheck(e.target.checked);
//     }


//     return (
//         <>
//             <input
//                 type="checkbox"
//                 checked={check}
//                 onChange={handleChecked}
//             />

//             {check === true ? (<Alert severity="success">This is a success alert — check it out!</Alert>) : (<Alert severity="error">This is an error alert — check it out!</Alert>)}
//         </>
//     )

// }

// export default PageTest


import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PageTest() {
    const notify = () => toast("Wow so easy!");
    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        </div>
    );
}

export default PageTest
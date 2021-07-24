// @ts-nocheck
import  {createTheme}  from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';
export const theme = createTheme({
    palette:{
        typography: {
            fontFamily: [
                '-apple-system', 
                'BlinkMacSystemFont', 
                "Segoe UI", 
                'Roboto', 
                'Helvetica', 
                'Arial', 
                'sans-serif'
            ]
        },
        primary: {
            main: "rgb(29,161,242)",
            contrastText: '#fff',
        },
        secondary: {
            main: '#fff',
        },
        background: {
            default: "fff",
        },
        
    },
    overrides: {
        MuiButton:{
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 15,
                fontWeight: 700,
                height: 40
            }
        }
    }
    
})
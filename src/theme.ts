
import  {createTheme}  from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';

export const theme = createTheme({
   
    typography: {
        fontFamily: "Segoe UI",
            // '-apple-system', 
            // 'BlinkMacSystemFont', 
            
            // 'Roboto', 
            // 'Helvetica', 
            // 'Arial', 
            // 'sans-serif'
        
        
    },
    palette:{
        
        primary: {
            light: "#536471",
            main: "rgb(29,161,242)",
            dark: "#536471",
            contrastText: '#fff',
            
            
        },
        secondary: {
            light: "#536471",
            main: '#000000',
            dark: "#536471",
            contrastText: '#fff',
         },
        background: {
            default: "fff",
        },
        text: {
            primary: '#0F1419',
            secondary: '##536471',
           
        },
        // action:{
        //     active: "#536471",
        //     hover: '#rgb(29,161,242)',
        //     focus: '#912020',
            
        // },
        
        
    },
    overrides: {
        MuiButton:{
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 15,
                fontWeight: 700,
                height: 40,
                
            },
        },
       MuiDialog:{
           paper:{
               minWidth: '600px',
           },
       }
        
      
      
       
    },
    
})
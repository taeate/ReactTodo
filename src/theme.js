const { createTheme } = require("@mui/material");
const { orange , grey, blueGrey, common, white} = require("@mui/material/colors");

export const theme = createTheme({
    palette:{
        primary:{
            main:grey[900],
            sub: blueGrey[300],
            light: '#0066ff',
        },
        white:{
            main:common.white
        }
    },
    status: {
      danger: orange[500],
    },
    components:{
        MuiInputBase:{
        styleOverrides:{
            root:{
            color: common
            }
        }
    }
    },
    CssTextField: {
        body1: {
          color: 'red'
        },
      }
  });
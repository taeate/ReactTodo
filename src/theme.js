const { createTheme } = require("@mui/material");
const { orange , grey, blueGrey, common} = require("@mui/material/colors");

export const theme = createTheme({
    palette:{
        primary:{
            main:grey[900],
            sub: blueGrey[300],
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
            color: common.white
            }
        }
    }
    }
  });
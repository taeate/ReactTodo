import './App.css';
import { React , useState} from 'react';
import { AppBar, Toolbar, Checkbox, Box
 ,Button, Tab, Tabs, Divider, List, ListItem, ListItemAvatar,
 Avatar, ListItemText} from '@mui/material';
import { theme } from './theme';
import { ThemeProvider, styled, makeStyles } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField'
import useWindowDimensions from './hook/useWindowDimension';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BasicTabs from './BasicTabs';


const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});


function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

function App() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const CssTextField = styled(TextField, Checkbox)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      color:"white",
      '& fieldset': {
        borderColor: 'white',
        color: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
        color: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        color: 'white',
      },
    },
  });

  const { height, width } = useWindowDimensions();

  const [todo, setTodo] = useState([]);

  const newTodo = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const strValue = data.get("strValue")
    if(strValue.length == 0) {
      alert("할일을 입력해주세요.");
      return;
    }
    setTodo([...todo,strValue]);
  }

  const RemoveHandler = (index) => {
    const cleanToDos = todo.filter(
    (_,idx) => idx !== index);
    console.log(cleanToDos);
    setTodo(cleanToDos);
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <div className='flex-1'>
            <MenuIcon></MenuIcon>
          </div>
          <span className='flex font-bold text-xl'>WHAT TODO!</span>
          <div className='flex-1'></div>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Box className='mt-4 text-center'>
      <form onSubmit={newTodo}>
          <CssTextField
          label="오늘의 할일은?"
          id="custom-css-outlined-input"
          variant="outlined"
          autoComplete='off'
          name='strValue'
          InputLabelProps={{
            style:{color:"white"}
          }}
          />
          <button type='submit' className='bg-red-300 rounded text-white ml-4 w-24 h-14'>추가하기</button>
      </form>
      </Box>
      <BasicTabs todos={todo}/>
      <Box className='ml-8 mt-8 text-white' style={{background: "#212121"}}>
        <ul>
            {todo.map((todo , index) =>
            <li key={index} className='mt-4 text-centera'>
              <BpCheckbox />
              {todo}
               <button onClick={() => RemoveHandler(index)} className='bg-red-500 ml-6 rounded p-2'>삭제</button>
            </li>
            )}
        </ul>
      </Box>

    </ThemeProvider>
  );
}

export default App;

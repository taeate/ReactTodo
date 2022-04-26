import './App.css';
import { React , useState} from 'react';
import { AppBar, Toolbar, Divider, Box ,Button } from '@mui/material';
import { theme } from './theme';
import { ThemeProvider, styled, makeStyles } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField'
import useWindowDimensions from './hook/useWindowDimension';



function App() {

  const CssTextField = styled(TextField)({
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
      <Box style={{background: "#212121"}}>
        <Toolbar>
        <Button color="white">ALL</Button>
        <Button color="white">TODAY</Button>
        <Button color="white">COMPALATE</Button>
        </Toolbar>
      </Box>
      <Box className='mt-4 text-center'>
      <form onSubmit={newTodo}>
          <CssTextField
          primary
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
      <Box className='ml-8 mt-8 text-white' style={{background: "#212121"}}>
        <ul>
          <li>
            {todo.map((todo , index) =>
            <li className='mt-4'>
              {todo}
               <button onClick={() => RemoveHandler(index)} className='bg-red-500 ml-6 rounded p-2'>삭제</button>
            </li>
            )}
          </li>
        </ul>
      </Box>

    </ThemeProvider>
  );
}

export default App;

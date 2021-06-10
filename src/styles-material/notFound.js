import { makeStyles } from '@material-ui/core';

export const useNotFound = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    border: '1xp solid red',
    background: 'radial-gradient(at 50% -20%, #908392, #0d060e) fixed',
  },
  button: {
    // fontSize: 10,
    // textTransform: 'uppercase',
    color: 'white',
    background: 'white',
    position: 'absolute',
    bottom: '10vh',
    left: '50%',
    transform: 'translateX(-50%)',
    margin: '0 auto',
  },
  image: {
    display: 'block',
    width: 'min(100%, 600px)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%, -50%)',
  },
}));

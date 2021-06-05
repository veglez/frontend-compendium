import { makeStyles } from '@material-ui/core';

export const useExplanation = makeStyles({
  modalImg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(100%, 470px)',
  },
});

import { Typography } from '@material-ui/core';
import React from 'react';
import { useIntro } from './introduction';
const Introduction = () => {
  const classes = useIntro();
  return (
    <header className={classes.header}>
      <Typography className={classes.subtitle} variant='h6' component='p'>
        This is a list of exercises that can be found in{' '}
        <a
          className={classes.externalLink}
          href='https://www.frontendmentor.io/challenges'
          target='_blank'
        >
          {' '}
          frontendmentor.io
        </a>{' '}
      </Typography>
      <Typography>
        Since a lot of this challenges are just one page i choose to create a
        lot of them in a single bundle and indexed here all together
      </Typography>
      <Typography>
        The beauty of this is the script in python i created in orden to
        configure the whole workspace; and by doing so, this project allowed me
        to combine knowledges to be more productive
      </Typography>

      <Typography variant='h6' component='h2'>
        What role does the python script play in this project?
      </Typography>
      <Typography>
        The script in python get as an input the route from where the projects
        are store after been downloaded from{' '}
        <a
          className={classes.externalLink}
          href='https://www.frontendmentor.io/challenges'
          target='_blank'
        >
          frontendmentor.io
        </a>
        , we just need to pick up the exercise we want to do and save it, then
        give the <span className={classes.route}>absolute path</span> of the
        file to the script and all the magic starts.
      </Typography>
    </header>
  );
};

export default Introduction;

import { Typography } from '@material-ui/core';
import React from 'react';
import { useIntro } from './introduction';
const Introduction = () => {
  const classes = useIntro();
  return (
    <header className={classes.header}>
      <Typography component='h2' variant='h5'>
        Introduction
      </Typography>
      <Typography>
        Frontendmentor.io is a page known for publishing web page designs so
        that those of us who enter the world of the frontend can practice our
        learned skills. It is an excellent site with challenges of varying
        degrees of difficulty, although almost all the exercises are on a single
        page; That is why it occurred to me to put them all together in a single
        project in order to practice page routing just like on a real website.
      </Typography>

      <Typography>
        For my first project I decided to download the zip file provided by the
        page, unzip it and then arrange the resources to create the site using{' '}
        <strong>react</strong>; When I got to the third exercise, what I had to
        do became very repetitive and that was when it came to my mind to make a{' '}
        <strong>python</strong> script that would do all that tedious process
        for me.
      </Typography>

      <Typography component='h2' variant='h5'>
        Why python?
      </Typography>
      <Typography>
        Python has been for me a language that I rely on as the first option to
        automate simple and tedious tasks, and this has been the case since I
        met it at collage in artificial intelligence classes. I have managed
        several libraries: numpy, pandas, opencv, tkinter, among others, so I
        know the great versatility that this programming language has and that
        has made it my favorite language. With python it is possible to perform
        very complex activities in a very simple way, it is difficult to resist
        using it.
      </Typography>

      <Typography component='h2' variant='h5'>
        What exactly does the python script do in this project?
      </Typography>
      <Typography>
        In order to speed up the process when carrying out exercises, the
        algorithm is in charge of configuring the entire workspace, is in charge
        of copying the necessary files in the corresponding paths and creating
        the files with the <strong>react syntax</strong>, including imports of
        the images to be used and also including a stylesheet for the main page
        with a preloaded style, it also adds the main content of the exercise.
        After running the script, it will only be in charge of creating the
        files that have not been created, in this way avoiding overwriting the
        previous work. In addition, as a final step it creates 2 necessary
        files: the first to make a routing of each new project that is added and
        the second saves the information necessary to present the project in
        cards.
      </Typography>

      {/* <Typography>
        The steps that the algorithm follows to complete its task are:
      </Typography> */}
    </header>
  );
};

export default Introduction;

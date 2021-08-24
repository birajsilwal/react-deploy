import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css';
import { makeStyles } from '@material-ui/core/styles';
import programmer1 from '../static/pp2.jpg';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  hi: {
    [theme.breakpoints.up('md')]: {
      fontSize: '5em',
    },
  },
  bannerCaption: {
    fontWeight: '300',
    [theme.breakpoints.up('md')]: {
      fontSize: '2em',
    },
  },
  main: {
    minHeight: '100vh',
    // background: 'linear-gradient(to right top, #65dfc9, #6cdbeb)',
  },
  main1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '85vh',
  },
  programmer: {
    width: '10rem',
    height: '12rem',
    borderRadius: '2rem',
    objectFit: 'cover',
  },
  glass: {
    background: 'white',
    minHeight: '70vh',
    // width: '50%',
    // background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
    // background: 'linear-gradient(to right top, #65dfc9, #6cdbeb)',
    zIndex: '2',
    backdropFilter: 'blur(2rem)',
    display: 'flex',
    borderRadius: '2rem',
  },
  rightSide: {
    flex: '2',
    // background: 'rgb(2,0,36)',
    // background: 'linear-gradient(to left, transparent 50%, black 50%) , radial-gradient(circle, rgba(242,242,251,0) 42%, rgba(0,87,255,0.4713235636051295) 77%, rgba(0,8,36,0.7570378493194152) 97%)',
    // background: 'radial-gradient(circle, rgba(242,242,251,0) 42%, rgba(0,87,255,0.4713235636051295) 77%, rgba(0,8,36,0.7570378493194152) 97%)',
    borderTopRightRadius: '2rem',
    borderBottomRightRadius: '2rem',
    // boxShadow: '0 0px 0px 0px rgba(0,87,255,0.2), 50px 70px 100px -60px rgba(0,87,255,0.2), 70px 0px 100px -50px rgba(0,87,255,0.2)',
    // boxShadow: '15px ​-20px 36px -15px rgba(0,87,255,0.2), 50px 70px 100px -60px rgba(0,87,255,0.2)',
    boxShadow: '15px -20px 36px -15px rgba(0,87,255,0.2), 50px 70px 100px -60px rgba(0,87,255,0.2)',
  },
  dashboard: {
    flex: '1',
    // background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
    // background: '',
    background: 'rgb(2,0,36)',
    background:
      'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(242,242,251,0) 0%, rgba(0,87,255,0.300455216266194) 100%)',
    // borderRadius: '2rem',
    borderTopLeftRadius: '2rem',
    borderBottomLeftRadius: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle1: {
    background: 'white',
    background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.2))',
    // background: 'red',
    height: '5rem',
    width: '5rem',
    position: 'absolute',
    top: '20%',
    right: '22%',
    borderRadius: '50%',
  },
  circle2: {
    background: 'red',
    background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.2))',
    height: '10rem',
    width: '10rem',
    position: 'absolute',
    bottom: '10%',
    left: '20%',
    borderRadius: '50%',
  },
  socialMediaLinks: {
    display: 'flex',
    '& > *': {
      padding: theme.spacing(0, 1),
    },
  },
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.main1}>
          <section className={classes.glass}>
            <div className={classes.dashboard}>
              <div className={classes.user}>
                <img className={classes.programmer} src={programmer1} alt="" />
                <h2>Biraj Silwal</h2>
                <p>Software Developer</p>
              </div>
              <div className={classes.socialMediaLinks}>
                <div>
                  <a href="https://github.com/birajsilwal" target="_blank">
                    <img width="35px" src="https://img.icons8.com/fluency/96/000000/github.png" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/birajsilwal/" target="_blank">
                    <img width="35px" src="https://img.icons8.com/fluency/96/000000/linkedin.png" />
                  </a>
                </div>
                <div>
                  <a>
                    <img width="35px" src="https://img.icons8.com/fluency/96/000000/twitter.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.rightSide}>
              <div>
                {/* <span style={{fontSize: '2rem', margin: '1em'}}>Computer Science + Economics @ UNM '22</span> */}
                <br />
                <h3>Computer Science + Economics @ UNM '22</h3>
              </div>
            </div>
          </section>
        </div>
        {/* <div className={classes.circle1}></div> */}
        {/* <div className={classes.circle2}></div> */}
      </div>
    </div>
  );
}

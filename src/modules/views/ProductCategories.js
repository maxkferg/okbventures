import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageSubtitle: {
    position: 'absolute',
    top: '275px',
    fontSize: '12px',
    textTransform: 'none'
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'http://www.okbventures.com/static/photos/benedict.jpeg',
      title: 'Benedict',
      subtitle: 'Blockchain Consultant',
      width: '40%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/antoine.jpeg',
      title: 'Antoine',
      subtitle: 'Partner, Au Pair Connection',
      width: '20%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/arnaud.jpeg',
      title: 'Arnuad',
      subtitle: 'Partner',
      width: '40%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/max.jpeg',
      title: 'Max',
      subtitle: 'Managing Partner, AI Lead',
      width: '38%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/felix.jpeg',
      title: 'Felix',
      subtitle: 'Benedict',
      width: '38%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/sofia.jpeg',
      title: 'Sofia',
      subtitle: 'Partner',
      width: '24%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/kevin.jpeg',
      title: 'Kevin',
      subtitle: 'Partner, French Connection',
      width: '40%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/sebastiano.jpeg',
      title: 'Sebastiano',
      subtitle: 'Benedict',
      width: '20%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/lars.jpeg',
      title: 'Lars',
      subtitle: 'Partner, Fitness Coach',
      width: '40%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/benoit.jpeg',
      title: 'Benoit',
      subtitle: 'Partner, Baidu Outreach',
      width: '40%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/ashton.jpeg',
      title: 'Ashton',
      subtitle: 'Partner',
      width: '40%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/kian.jpeg',
      title: 'Kian',
      subtitle: 'Partner, Coursera Expert',
      width: '20%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/kian.jpeg',
      title: 'Amory',
      subtitle: 'Managing Partner, Head Influencer',
      width: '20%',
    },
    {
      url:
        'http://www.okbventures.com/static/photos/grant.jpeg',
      title: 'Grant',
      subtitle: 'Partner, Hemp Consultant',
      width: '20%',
    },
  ];

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Partners
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
              </Typography>
              <Typography
                component="h4"
                variant="h6"
                color="inherit"
                className={classes.imageSubtitle}
                style={{top:"275px", position:"absolute"}}
              >
                {image.subtitle}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </LayoutBody>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);

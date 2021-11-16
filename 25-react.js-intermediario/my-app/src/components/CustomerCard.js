import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Avatar,
  IconButton
} from '@material-ui/core'


import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'

import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'

const useStyles = makeStyles( theme => ({
  root: {
    maxWidth: 345
  }
}))

const CustomerCard = ({ name, lastName, email, avatar, className}) => {
  const classes = useStyles()

  return (
    <Card  className={classNames(className, classes.root)} >
      <CardContent>
        <CardHeader 
          avatar={
            <Avatar aria-label="recipe" src={avatar} />
          }        
          title={`${name} ${lastName}`}
          subheader={email}
          
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share"  >
            <ShareIcon  />
          </IconButton>
          
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CustomerCard
import React, { Component } from 'react';
import axios from 'axios';
import {
  // Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import {
  // Divider, Grid, Icon,
  Segment, Card, Image
} from 'semantic-ui-react';
import { setFlash } from '../actions/flash';


class Beers extends Component {
  state = {
    beers: []
    // loaded: false
   }

  componentDidMount() {
    this.getBeers(this.props);
  }


  getBeers = () => {
    const { beers } = this.state
    const { beer, dispatch } = this.props;
      axios.get('/api/all_beers')
        .then( res => {
          this.setState({beers: res.data.entries})
          this.setState({beers: res.data})
        }).catch( error => {
          setFlash('error', 'error')
        })
    }

  oneBeer = () => {
    const { beers } = this.state;
    return beers.map( x => {
      const { id, name, description, style, abv } = x
      return (
        <Card key={id} style={styles.contents}>
          <Card.Content>
            <Card.Header> {name} </Card.Header>
            <Card.Meta> Which is a {x.style.name} </Card.Meta>
            <Card.Meta>
              And has an ABV of {abv}
            </Card.Meta>
            <Card.Description>
              {description}
            </Card.Description>
          </Card.Content>
        </Card>
      )

    })
  }

  render() {
    return (
      <Segment style={styles.background}>
        {this.oneBeer() }
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'centered',
  },

  contents: {
    backgroundColor: '#fff',
    width: '80%',
    textAlign: 'centered',

  },
}


const mapStateToProps = (state) => {
  return { beers: state.beers }
}
export default connect(mapStateToProps)(Beers);

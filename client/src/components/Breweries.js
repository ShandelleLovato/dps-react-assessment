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


class Breweries extends Component {
  state = {
    breweries: []
   }

  componentDidMount() {
    this.getBreweries(this.props);
  }


  getBreweries = () => {
    const { breweries } = this.state
    const { brewery, dispatch } = this.props;
      axios.get('/api/all_breweries')
        .then( res => {
          this.setState({breweries: res.data.entries})
          this.setState({breweries: res.data})
        }).catch( error => {
          setFlash('error', 'error')
        })
    }

  oneBrewery = () => {
    const { breweries } = this.state;
    return breweries.map( x => {
      const { id, name, description } = x
      return (

        <Card key={id} style={styles.contents}>
            <Card.Content style={styles.centered}>
              <Card.Header style={styles.centered}> {name} </Card.Header>
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
        {this.oneBrewery() }
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
    width: '100%',
    textAlign: 'centered',
  },

  contents: {
    backgroundColor: '#fff',
    width: '80%',
    textAlign: 'centered',
  },
  centered: {
    margin: 'auto',
    textAlign: 'centered',
    justifyContent: 'centered',
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries }
}
export default connect(mapStateToProps)(Breweries);

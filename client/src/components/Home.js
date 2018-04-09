import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import Beers from './Beers';
import Breweries from './Breweries';

class Home
 extends Component {
  state = {};

  render() {
    return(
      <Segment basic>
        <Segment basic textAlign='center'>
        </Segment>
        <Grid>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Card.Group>
              <Segment inverted style={styles.wide}>
                <Header
                  as='h1'
                  textAlign='center'
                  style={styles.header}>
                    Beer
                </Header>
                <Divider />
                <Beers />
              </Segment>
            </Card.Group>
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Card.Group>
              <Segment inverted style={styles.wide}>
                <Header
                  as='h1'
                  textAlign='center'
                  style={styles.header}>
                    Breweries
                </Header>
                <Divider />
                <Breweries/>
              </Segment>
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },

  wide: {
    width: '100%',
    margin: 'auto',

  },
  header: {
    color: '#2ecc40'
  }
}

export default Home
;

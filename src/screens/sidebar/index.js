import React, { Component } from 'react';
import { Image, FlatList } from 'react-native';
import {
  Content,
  Text,
  // List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from 'native-base';
import styles from './style';

const drawerCover = require('../../../assets/drawer-cover.png');
const drawerImage = require('../../../assets/logo-kitchen-sink.png');

const datas = [
  {
    name: 'Home',
    route: 'MainTabs',
    icon: 'home'
  },
  {
    name: 'Settings',
    route: 'Settings',
    icon: 'keypad',
    bg: '#B89EF5',
    types: '8'
  },
  {
    name: 'Counter redux',
    route: 'Counter',
    icon: 'calculator'
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content bounces={false} style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <FlatList
            data={datas}
            renderItem={({ item }) => (
              <ListItem button noBorder onPress={() => this.props.navigation.navigate(item.route)}>
                <Left>
                  <Icon
                    active
                    name={item.icon}
                    style={{ color: '#777', fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>{item.name}</Text>
                </Left>
                {item.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: item.bg
                      }}
                    >
                      <Text style={styles.badgeText}>{`${item.types} Types`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;

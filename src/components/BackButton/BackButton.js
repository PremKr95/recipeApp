import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {Icon} from 'native-base'
export default class BackButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.btnContainer}>
        <Icon style={{color:'#fff'}} name={'ios-arrow-back'} type={'Ionicons'}/>
        <Text style={{color:'#fff',fontSize:18,marginLeft:6}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};

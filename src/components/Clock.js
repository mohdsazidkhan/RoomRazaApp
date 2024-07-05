import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default class AnalogClock extends Component {

  constructor(props) {
      super(props);

      let d = new Date();

      this.state = {
        sec: d.getSeconds() * 6,
        min: d.getMinutes() * 6 + (d.getSeconds() * 6) / 60,
        hour: ((d.getHours() % 12) / 12) * 360 + 90 +
          (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12,
        currentTime: this.getCurrentTime(d)
      };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      let d = new Date();
      this.setState({
        sec: d.getSeconds() * 6,
        min: d.getMinutes() * 6 + (d.getSeconds() * 6) / 60,
        hour: ((d.getHours() % 12) / 12) * 360 + 90 +
          (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12,
        currentTime: this.getCurrentTime(d)
      });
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getCurrentTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour clock
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the state or props relevant to rendering change
    return this.state.currentTime !== nextState.currentTime;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('this.state.currentTime', this.state.currentTime);
  }

  clockFrame = () => {
    return {
      width: this.props.clockSize,
      height: this.props.clockSize,
      position: 'relative',
      backgroundColor:'#FFF',
      shadowColor: "rgba(137, 122, 0, 0.5)",
      elevation: 10,
      borderColor: 'rgba(137, 122, 0, 0.05)',
      borderWidth: this.props.clockBorderWidth,
      borderRadius: this.props.clockSize/2
    }
  }

  clockHolder = () => {
    return {
      width: this.props.clockSize,
      height: this.props.clockSize,
      position: 'absolute',
      right: -this.props.clockBorderWidth,
      bottom: -this.props.clockBorderWidth
    }
  }

  clockFace = () => {
    return {
      width: this.props.clockCentreSize,
      height: this.props.clockCentreSize,
      elevation:10,
      backgroundColor: this.props.clockCentreColor,
      borderRadius: this.props.clockCentreSize / 2,
      top: (this.props.clockSize - this.props.clockCentreSize) / 2,
      left: (this.props.clockSize - this.props.clockCentreSize) / 2
    }
  }

  hourHandStyles = () => {
    return {
      width: 0,
      height: 0,
      position: 'absolute',
      backgroundColor: this.props.hourHandColor,
      elevation:10,
      top: this.props.clockSize/2,
      left: this.props.clockSize/2,
      marginVertical: -this.props.hourHandWidth,
      marginLeft: -this.props.hourHandLength/2,
      paddingVertical: this.props.hourHandWidth,
      paddingLeft: this.props.hourHandLength,
      borderTopLeftRadius: this.props.hourHandCurved ?
                           this.props.hourHandWidth : 0,
      borderBottomLeftRadius: this.props.hourHandCurved ?
                              this.props.hourHandWidth : 0
    }
  }

  minuteHandStyles = () => {
    return {
      width: 0,
      height: 0,
      position: 'absolute',
      backgroundColor: this.props.minuteHandColor,
      elevation:10,
      top: this.props.clockSize/2,
      left: this.props.clockSize/2,
      marginTop: -(this.props.minuteHandLength/2),
      marginHorizontal: -this.props.minuteHandWidth,
      paddingTop: this.props.minuteHandLength,
      paddingHorizontal: this.props.minuteHandWidth,
      borderTopLeftRadius: this.props.minuteHandCurved ?
                           this.props.minuteHandWidth : 0,
      borderTopRightRadius: this.props.minuteHandCurved ?
                            this.props.minuteHandWidth : 0
    }
  }

  secondHandStyles = () => {
    return {
      width: 0,
      height: 0,
      position: 'absolute',
      backgroundColor: this.props.secondHandColor,
      elevation:10,
      top: this.props.clockSize/2,
      left: this.props.clockSize/2,
      marginTop: -(this.props.secondHandLength/2),
      marginHorizontal: -this.props.secondHandWidth,
      paddingTop: this.props.secondHandLength,
      paddingHorizontal: this.props.secondHandWidth,
      borderTopLeftRadius: this.props.secondHandCurved ?
                           this.props.secondHandWidth : 0,
      borderTopRightRadius: this.props.secondHandCurved ?
                            this.props.secondHandWidth : 0
    }
  }

  render() {
    return (
      <View>
        <View style={ this.clockFrame() }>
          <Image
            style={{width: this.props.clockSize - this.props.clockBorderWidth*2,
              height: this.props.clockSize - this.props.clockBorderWidth*2}}
            resizeMode='stretch'
            source={require('../assets/images/png/clock.png')}
          />
          <View style={ this.clockHolder() }>
            <View style={[ this.hourHandStyles(),
              {transform:[{ rotate: this.state.hour + 'deg' },
              {translateX: -(this.props.hourHandOffset +
                             this.props.hourHandLength/2) }]}]}
            />
            <View style={[ this.minuteHandStyles(),
              {transform:[{ rotate: this.state.min + 'deg' },
              { translateY: -(this.props.minuteHandOffset +
                              this.props.minuteHandLength/2) }]}]}
            />
            <View style={[ this.secondHandStyles(),
              {transform:[{ rotate: this.state.sec + 'deg' },
              {translateY: -(this.props.secondHandOffset +
                             this.props.secondHandLength/2) }]}]}
            />
            <View style={ this.clockFace() }/>
          </View>
        </View>
        <Text style={{color:'white', marginLeft:10}}>{this.state.currentTime}</Text>
      </View>
    )
  };

};

AnalogClock.defaultProps = {
  clockSize: 100,
  clockBorderWidth: 2,
  clockCentreSize: 5,
  clockCentreColor: 'black',
  hourHandColor: 'black',
  hourHandCurved: true,
  hourHandLength: 22,
  hourHandWidth: 1,
  hourHandOffset: 0,
  minuteHandColor: 'black',
  minuteHandCurved: true,
  minuteHandLength: 32,
  minuteHandWidth: 1,
  minuteHandOffset: 0,
  secondHandColor: 'black',
  secondHandCurved: false,
  secondHandLength: 36,
  secondHandWidth: 1,
  secondHandOffset: 0,
};

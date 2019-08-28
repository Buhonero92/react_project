import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import PreLoader from './app/components/preLoader';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import { loginStructure, loginOptions} from './app/components/forms/testForm';

export default class App extends React.Component{

  constructor() {
    super();

    this.state = {
      testFormValue: {
        user: "",
        password: ""
      },
      testFormError: "",
      loaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: false
      });
    }, 2000);

  }

  onChange = (testFormValue) => {
    
  }

  sendFormTest = () => {
    
  }

  render () {
    const { testFormValue, testFormError, loaded  } = this.state;
    if(!loaded) {
      return <PreLoader />;
    } else {
     return (
      <View style={styles.container}>
        <Form ref="formTest" 
        type={loginStructure} 
        options={loginOptions} 
        value={testFormValue} 
        onChange={value => this.onChange(value)}/>
        <Button title="Login" color= "black" onPress={this.sendFormTest.bind(this)}/>
        <Text style={styles.testFormErrorText}>{testFormError}</Text>
      </View>
      ); 
    }
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  testFormErrorText: {
    color: '#f00',
    textAlign: "center",
    paddingTop: 20,
    tex

  }
});

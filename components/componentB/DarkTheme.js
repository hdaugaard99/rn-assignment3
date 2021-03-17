import React, { Component } from 'react';
 import { Button, StyleSheet, View, Text } from 'react-native';
 import { darkStyleSheet, lightStyleSheet, pinkStyleSheet, mintStyleSheet} from './styles';                          
  
 export default class App extends Component {
  
   constructor(props) {
       super(props);
       this.state = {
           theme: darkStyleSheet                                     
       };
       this.toggleTheme = this.toggleTheme.bind(this);    
       this.toggleBlack = this.toggleBlack.bind(this);   
       this.togglePink = this.togglePink.bind(this); 
       this.toggleMint = this.toggleMint.bind(this);    
   }
  
   toggleTheme() {
       this.setState({theme: lightStyleSheet})          
   };

   toggleBlack() {
        this.setState({theme: darkStyleSheet})
   }

   togglePink() {
       this.setState({theme: pinkStyleSheet})
   }

   toggleMint() {
       this.setState({theme: mintStyleSheet})
   }
  
   render() {
  
     const styles = this.state.theme;          
     const backgroundColor =
           StyleSheet.flatten(styles.container).backgroundColor;  
  
     return (
         <View style={styles.container}> 
            <Text style={styles.heading}>Click a button to change the theme!</Text>                         
             <View style={styles.box}>                            
                 <Button title="Light"                 
                         onPress={this.toggleTheme}/>  
                <Button title="Dark" onPress={this.toggleBlack}/>  
                <Button title="Pink" onPress={this.togglePink} />  
                <Button title="Mint" onPress={this.toggleMint} />       
             </View>
         </View>
     );
   }
 }


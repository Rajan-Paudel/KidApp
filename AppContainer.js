import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './routes/AppNavigator';
import FirstNavigator from './routes/FirstNavigator';

 
export default AppContainer= () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState();

  useEffect( () => {
    
    AsyncStorage.getItem('AlreadyLaunched').then(value =>{
      if(value==null){
        AsyncStorage.setItem('AlreadyLaunched','true');
        setIsFirstLaunch(true);
      }
      else{
        setIsFirstLaunch(false);
      }
    })
    
  }, []);

    if( isFirstLaunch == null)
    {
      return null;
    }
 else if (isFirstLaunch == true) {
  return(
    <FirstNavigator/> 
    // <AppNavigator/> 
  )
    }
    else{
      return(
        <AppNavigator/>   
        // <FirstNavigator/> 
      )
    }
    
}

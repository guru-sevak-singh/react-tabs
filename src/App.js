import logo from './logo.svg';
import './App.css';
import 'react-notifications/lib/notifications.css';
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { ToDoBase } from './components/model';
import { Tab } from './components/tabing';
import { data } from './data/data';

function App() {
  return (
    <Tab blog={data}/>
  )

}



export default App; 

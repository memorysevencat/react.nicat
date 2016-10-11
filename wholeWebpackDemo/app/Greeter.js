import config from './config.json';
import styles from './greeter.css';
import React, {Component} from 'react'
class DIVTest extends React.Component{
	render(){
		return <div className={styles.root}>{config.greetText}</div>
	}
}
export default DIVTest

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LetterList } from './LetterList';
import TypeInput from './TypeInput';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterLetterList: []
    };
    this.handleToggleLetterInList = this.handleToggleLetterInList.bind(this);
  }

  handleToggleLetterInList(newLetter){
    var newMasterLetterList = this.state.masterLetterList.slice();
    newMasterLetterList.push(newLetter);
    this.setState({masterLetterList: newMasterLetterList});
  }

  render() {
    return (
      <div>
      <Switch>
      <Route exact path='/' render={() => <LetterList onNewKeyPress={this.state.handleToggleLetterInList}/>}/>
      </Switch>
      <TypeInput/>
      </div>
    );
  }
}

export default App;

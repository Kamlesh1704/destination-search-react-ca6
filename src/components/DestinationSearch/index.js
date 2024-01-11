// Write your code here
import {Component} from 'react'
import {DestinationItem} from './components/DestinationItem'
class DestinationSearch extends Component {
   const {destinationsList} = this.props
    console.log(destinationsList)
    state = {searchInput: '', afterdestinationsList: destinationsList}
    onChangeSearchInput = event => {
      this.setState({searchInput: event.target.value})
    }
  render() {
    const {searchInput, afterdestinationsList} = this.state
    const searchResults = afterdestinationsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="">
        <h1 className="">Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
          className=""
        />
        <ul className="">
          {searchResults.map(eachUser => (
            <DestinationItem userDetails={eachUser} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

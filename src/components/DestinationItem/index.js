// Write your code here
import './index.css'
const DestinationItem = props => {
  const {userDetails} = props
  const { imgUrl, name} = userDetails
  return (
    <div className="card">
      <img src={imgUrl} className="img" />
      <h1 className="name">{name}</h1>
    </div>
  )
}
export default DestinationItem

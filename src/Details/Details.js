import { useLocation } from "react-router-dom";
function Details() {
const {state}=useLocation();
const list=state.data
console.log(list)
    return(
    <table class="table">
  <thead>
    <tr>
    <th scope="col">UserID</th>
      <th scope="col">Phonenumber</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Department</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Country</th>
      <th scope="col">Pincode</th>
    </tr>
  </thead>
  <tbody>
  {list.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
  </tbody>
</table>
    )
}

export default Details;
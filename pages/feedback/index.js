import {useRouter} from "next/router";
import Link from "next/link";

import feedbkStyles from "../../styles/feedBack.module.css";

function Feedback() {
 const router = useRouter();

 const handleSubmit = (e) => {
  e.preventDefault();
  router.replace("/");
 };

 return (
  <div className={feedbkStyles.testbox}>
   <form onSubmit={handleSubmit}>
    <h1>Shoorvir Feedback Form</h1>
    <p>
     Please help us improve our services by filling in this feedback form. Thank
     you!
    </p>
    <h4>
     1. Service Location<span>*</span>
    </h4>

    <select>
     <option
      className={feedbkStyles.disabled}
      value="location"
      disabled
      selected
     >
      Please Select
     </option>
     <option value="1">Home</option>
     <option value="2">Office</option>
     <option value="3">Public Place</option>
    </select>

    <h4>
     2. Day Visited<span>*</span>
    </h4>
    <div className={feedbkStyles.dayVisited}>
     <input type="date" name="dayvisited" required />
    </div>

    <h4>3. Rating on various parameters.</h4>
    <table>
     <tr>
      <th className={feedbkStyles.firstCol}></th>
      <th>Amazing</th>
      <th>Good</th>
      <th>Decent</th>
      <th>Bad</th>
     </tr>
     <tr>
      <td className={feedbkStyles.firstCol}>Behaviour</td>
      <td>
       <input type="radio" value="none" name="Food" />
      </td>
      <td>
       <input type="radio" value="none" name="Food" />
      </td>
      <td>
       <input type="radio" value="none" name="Food" />
      </td>
      <td>
       <input type="radio" value="none" name="Food" />
      </td>
     </tr>
     <tr>
      <td className={feedbkStyles.firstCol}>Overall Service Quality</td>
      <td>
       <input type="radio" value="none" name="Service" />
      </td>
      <td>
       <input type="radio" value="none" name="Service" />
      </td>
      <td>
       <input type="radio" value="none" name="Service" />
      </td>
      <td>
       <input type="radio" value="none" name="Service" />
      </td>
     </tr>
     <tr>
      <td className={feedbkStyles.firstCol}>Speed of Service</td>
      <td>
       <input type="radio" value="none" name="Speed" />
      </td>
      <td>
       <input type="radio" value="none" name="Speed" />
      </td>
      <td>
       <input type="radio" value="none" name="Speed" />
      </td>
      <td>
       <input type="radio" value="none" name="Speed" />
      </td>
     </tr>
     <tr>
      <td className={feedbkStyles.firstCol}>Price</td>
      <td>
       <input type="radio" value="none" name="Price" />
      </td>
      <td>
       <input type="radio" value="none" name="Price" />
      </td>
      <td>
       <input type="radio" value="none" name="Price" />
      </td>
      <td>
       <input type="radio" value="none" name="Price" />
      </td>
     </tr>
     <tr>
      <td className={feedbkStyles.firstCol}>Overall Experience</td>
      <td>
       <input type="radio" value="none" name="Experience" />
      </td>
      <td>
       <input type="radio" value="none" name="Experience" />
      </td>
      <td>
       <input type="radio" value="none" name="Experience" />
      </td>
      <td>
       <input type="radio" value="none" name="Experience" />
      </td>
     </tr>
    </table>
    <h4>4. Any comments, questions or suggestions?</h4>
    <textarea rows="5"></textarea>

    <div className={feedbkStyles.btnBlock}>
     <button type="submit">Send Feedback</button>
    </div>
    <br />
    <Link
     className={feedbkStyles.btnBlock + " " + feedbkStyles.btnCancel}
     href="/"
    >
     <button>Cancel</button>
    </Link>
   </form>
  </div>
 );
}

export default Feedback;

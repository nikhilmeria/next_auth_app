import feedbkStyles from "../../styles/feedBack.module.css";

function Feedback() {
 return (
  <div className={feedbkStyles.testbox}>
   <form action="/">
    <h1>Restaurant Feedback Form</h1>
    <p>
     Please help us improve our restaurant services by filling in our feedback
     form. Thank you!
    </p>
    <h4>Name</h4>
    <div className={feedbkStyles.name}>
     <input type="text" name="name" placeholder="First" />
     <input type="text" name="name" placeholder="Last" />
    </div>
    <h4>Email</h4>
    <input type="text" name="name" />
    <h4>
     Location You Visited<span>*</span>
    </h4>
    <select>
     <option class="disabled" value="location" disabled selected>
      *Please Select*
     </option>
     <option value="1">Location 1</option>
     <option value="2">Location 2</option>
     <option value="3">Location 3</option>
     <option value="4">Location 4</option>
     <option value="5">Location 5</option>
    </select>
    <h4>
     Day Visited<span>*</span>
    </h4>
    <div className={feedbkStyles.dayVisited}>
     <input type="date" name="dayvisited" required />
    </div>
    <h4>
     Time Visited<span>*</span>
    </h4>
    <div className={feedbkStyles.timeVisited}>
     <input type="time" name="timevisited" required />
    </div>
    <h4>Dine In / Take Out</h4>
    <div className={feedbkStyles.questionAnswer}>
     <label>
      <input type="radio" value="none" name="Dine" /> Dine In
     </label>
     <label>
      <input type="radio" value="none" name="Dine" /> Take Out
     </label>
    </div>
    <h4>
     Age<span>*</span>
    </h4>
    <select>
     <option
      className={feedbkStyles.disabled}
      value="location"
      disabled
      selected
     >
      *Please Select*
     </option>
     <option value="under 13">Under 13</option>
     <option value="13-17">13-17</option>
     <option value="18-24">18-24</option>
     <option value="25-34">25-34</option>
     <option value="35-44">35-44</option>
     <option value="45-54">45-54</option>
     <option value="55 or older">55 or older</option>
    </select>
    <h4>Untitled</h4>
    <table>
     <tr>
      <th className={feedbkStyles.firstCol}></th>
      <th>Amazing</th>
      <th>Good</th>
      <th>Decent</th>
      <th>Disappointing</th>
     </tr>
     <tr>
      <td className={feedbkStyles.firstCol}>Food Quality</td>
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
    <h4>Any comments, questions or suggestions?</h4>
    <textarea rows="5"></textarea>
    <div className={feedbkStyles.btnBlock}>
     <button type="submit" href="/">
      Send Feedback
     </button>
    </div>
   </form>
  </div>
 );
}

export default Feedback;

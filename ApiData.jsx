import "./ApiData.css";
import axios from "axios";
import { useState } from "react";

const ApiData = () => {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState("");
  const onSubmit = (e) => {
    
    e.preventDefault();
    const ifsc = e.target.ifsc.value;
    e.target.reset();

    // Post Data Through Fetch Api

    axios
      .post(
        "https://stageapi.powerlook.in/rest/V1/verifyifsc/ifsc/",
        {
          ifsc,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));

    // Get Data Through Fetch Api
    axios
      .get("https://stageapi.powerlook.in/rest/V1/verifyifsc/ifsc/")
      .then((res) => {
        // console.log(res.data);
        setMyData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    // Post Data Through Fetch Api
    <>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="Ifsc">Enter IFSC code: - </label>
        <input
          type="text"
          placeholder="IFSC code"
          name="ifsc"
          className="ifsc_input"
          pattern="[A-Za-z]{4}[0]{1}[0-9A-Za-z]{6}"
          required
          maxLength="11"
        />
        <input type="submit" name="data_submit" className="btn" />
      </form>

      {/* // Get Data Through Fetch Api */}

      <h2>{error}</h2>
      <div className="container">
        {myData.map((post) => {
          return (
            <ul key={post} className="bank_details">
              <li>
                <span> Address:-</span> {post.Address}
              </li>
              <li>
                <span> Bank:-</span> {post.Bank}
              </li>
              <li>
                <span> Branch:-</span> {post.Branch}
              </li>
              <li>
                <span> District:-</span> {post.District}
              </li>
              <li>
                <span> State:-</span> {post.State}
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default ApiData;
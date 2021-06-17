import React, { useState } from "react";
import axios from "axios";
import styles from "./RateUsers.module.css";
import ReactStars from "react-rating-stars-component";

const { REACT_APP_API_URL } = process.env;

const RateUsers = ({ tutor }) => {
  const [attendanceRatingValue, setAttendanceRatingValue] = useState(0);
  const [knowledgeRatingValue, setKnowledgeRatingValue] = useState(0);
  const [contentRatingValue, setContentRatingValue] = useState(0);
  const [reviewValue, setReviewValue] = useState("");

  const attendanceChanged = (attendanceRating) => {
    console.log("attendanceRating : ", attendanceRating);
    setAttendanceRatingValue(attendanceRating);
  };
  const knowledgeChanged = (knowledgeRating) => {
    console.log("knowledgeRating : ", knowledgeRating);
    setKnowledgeRatingValue(knowledgeRating);
  };
  const contentChanged = (contentRating) => {
    console.log("contentRating : ", contentRating);
    setContentRatingValue(contentRating);
  };
  const reviewUpdate = () => {
    let reviewData = document.getElementById("review").value;
    setReviewValue(reviewData);
  };

  let data = {
    attendance: attendanceRatingValue,
    knowledge: knowledgeRatingValue,
    cont: contentRatingValue,
    reviews: reviewValue,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendPutRequest();
    console.log(reviewValue);
    window.location.reload();
  };

  const sendPutRequest = async () => {
    try {
      const resp = await axios({
        method: "PUT",
        url: `${REACT_APP_API_URL}/dashboard/users/${tutor.user_id}`,
        headers: { token: localStorage.token },
        data: data,
      });
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-primary dropdown-toggle"
          data-toggle="collapse"
          data-target={`#${tutor.user_name}`}
        >
          All Ratings
        </button>
        <div id={`${tutor.user_name}`} className="collapse">
          <div class="form-group">
            <label className={styles.comic} for="attendance">
              attendance:
            </label>
            <p>
              <ReactStars
                count={tutor.attendance}
                size={18}
                edit={false}
                color="#386FE7"
              />
            </p>
          </div>
          <div class="form-group">
            <label className={styles.comic} for="knowledge">
              knowledge:
            </label>
            <p>
              <ReactStars
                count={tutor.knowledge}
                size={18}
                edit={false}
                color="#386FE7"
              />
            </p>
          </div>
          <div class="form-group">
            <label className={styles.comic} for="content">
              content:
            </label>
            <p>
              <ReactStars
                count={tutor.content}
                size={18}
                edit={false}
                color="#386FE7"
              />
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="btn btn-primary dropdown-toggle"
          data-toggle="collapse"
          data-target={`#${tutor.user_id}`}
        >
          Rate Me 
        </button>
        <div id={`${tutor.user_id}`} className="collapse">
          <div class="form-group">
            <label className={styles.comic} for="attendance">
              attendance:
            </label>
            <p>
              <ReactStars
                count={5}
                onChange={attendanceChanged}
                size={18}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#386FE7"
              />
            </p>
          </div>
          <div class="form-group">
            <label className={styles.comic} for="knowledge">
              knowledge:
            </label>
            <p>
              <ReactStars
                count={5}
                onChange={knowledgeChanged}
                size={18}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#386FE7"
              />
            </p>
          </div>
          <div class="form-group">
            <label className={styles.comic} for="content">
              content:
            </label>
            <p>
              <ReactStars
                count={5}
                onChange={contentChanged}
                size={18}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#386FE7"
              />
            </p>
          </div>
          <div class="form-group">
            <textarea
              rows="1"
              id="review"
              placeholder="enter review here"
              onChange={reviewUpdate}
            ></textarea>
          </div>
          <button type="submit" onClick={onSubmit} class="btn btn-default">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateUsers;

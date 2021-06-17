import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./tutor.module.css";
import teacherImg from "../../images/tutor2.jpg";
import studentImg from "../../images/student2.jpg";
import RateUsers from "../RateUsers";
import ReactStars from "react-rating-stars-component";

const { REACT_APP_API_URL } = process.env;

const tutorRating = {
  size: 25,
  edit: false,
  isHalf: true,
  color: "#386FE7",
};

const Tutor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${REACT_APP_API_URL}/dashboard/users`, {
        method: "GET",
        headers: { token: localStorage.token },
      });
      setData(result.data);
    };
    fetchData();
  }, []);

  const teacherOrStudentName = (tutor) => {
    if (tutor.teacher_student === "t") return "Instructor";
    else return "Student";
  };

  const teacherOrStudentImage = (tutor) => {
    if (tutor.teacher_student === "t") {
      return teacherImg;
    } else {
      return studentImg;
    }
  };

  return (
    <div>
      {data.map((tutor) => {
        return (
          <div className={styles.Tutorbox} key={tutor.user_id}>
            <div className={styles.Image}>
              <img src={teacherOrStudentImage(tutor)} alt="JCVD" />
              <div>{tutor.user_name}</div>
              <div className={styles.font}>{teacherOrStudentName(tutor)}</div>
            </div>
            <div className={styles.Ratings}>
              <div>overall rating:</div>

              <div className={styles.tutorstars}>
                <ReactStars
                  count={(
                    (parseInt(tutor.attendance, 10) +
                      parseInt(tutor.knowledge, 10) +
                      parseInt(tutor.cont, 10)) /
                    3
                  ).toFixed(1)}
                  {...tutorRating}
                />
              </div>
              <div className={styles.Reviews}>
                <RateUsers tutor={tutor} />
                <div>
                  <button
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="collapse"
                    data-target={`#${tutor.reviews}`}
                  >
                    Latest Review
                  </button>
                  <div id={`${tutor.reviews}`} className="collapse">
                    <p className={styles.reviewbox}>"{tutor.reviews}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tutor;

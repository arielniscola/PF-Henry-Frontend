
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createReview, getComplexDetails } from '../redux/actions';

const Review = ({id,userId}) => {
    const dispatch = useDispatch()
    const [review, setReview] = useState({
        rating: 0,
        comment: "",
        clientId:userId,
        complejoId:id})

  const handleChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
    console.log("esto es review", review);
  };
  const handleCreateReview = () => {
    dispatch(createReview(review));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col h-52 mb-4 relative items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          {[...Array(5)].map((e, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  hidden={true}
                  value={ratingValue}
                  onClick={(e) => handleChange(e)}
                />
                <div
                  className={
                    ratingValue <= review.rating
                      ? "text-3xl mb-2 text-yellow-400"
                      : "text-3xl mb-2 text-gray-400"
                  }
                >
                  <i className="fa-solid fa-star"></i>
                </div>
              </label>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center">
          <textarea
            name="comment"
            id=""
            cols="40"
            rows="3"
            onChange={handleChange}
            placeholder="Leave your comment"
            className="border border-gray-300 p-2 rounded mb-5"
          ></textarea>
        </div>
        <button
          className=" absolute bottom-0 right-1 w-16 h-10 ml-1 text-xl font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
          onClick={handleCreateReview}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Review;

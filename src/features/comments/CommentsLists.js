import React from "react";

import { Link } from "react-router-dom";
import { useSelector} from 'react-redux'
import Buttons from "../../components/Buttons";
export default function CommentsLists() {
    const comments = useSelector(store => store.comments);

  const renderCard = () =>
    comments.map((comment) => (
      <div className=" bg-indigo-100 p-5 text-center">
        <div>
         
          <span className=" font-normal">{comment.comment}</span>
        </div>
        <div className=" flex gap-2">
          
        </div>
      </div>
    ));
  return (
    <>
    <div className=" flex items-center justify-center h-screen">
    <div className=" container mx-auto px-2 max-w-5xl pt-10  flex justify-center items-center">
       <div>
       <h1 className=" text-center font-bold text-2xl font-serif text-indigo-800 ">
      My blogs
        </h1>
       <div className="flex justify-center items-center">
       <Link to="/add-comments">
            <Buttons>AddBlog</Buttons>
          </Link>
       </div>
       
         
          <div className=" grid gap-5">
            {comments.length ? (
              renderCard()
            ) : (
              <p className=" text-center col-span-2 font-semibold font-bold">
                No Blogs here
              </p>
            )}
          </div>
       
       </div>
      </div>
    </div>
    
    </>
  );
}

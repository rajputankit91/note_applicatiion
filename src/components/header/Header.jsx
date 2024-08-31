
import React from "react";
import "./header.css";
import { IoAddCircle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

const Header = ({ handleAdd, handleSketch }) => {

    return (
        <>
            <div className="header-container">
                <div className="inner-header">

                    <div className="logo">
                        <a href="/">Apna Notes</a>
                    </div>

                    <div className="icon-container">

                        <ul>
                            <li><button className="addBtn" onClick={handleAdd}><IoAddCircle className="add Icon" /></button></li>
                            <li><button className="checkBtn"><FaCircleCheck className="check Icon" /></button></li>
                            <li><button className="editBtn" onClick={handleSketch}><FaPencilAlt className="pencil Icon" /></button></li>
                            <li><button className="shareBtn"><FaShare className="share Icon" /></button></li>
                        </ul>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Header;
import React from "react";
import "./leftMain.css"

const LeftMain = ({ notes, deleteNote, getNote, activeNote, setActiveNote }) => {

    const sortedNotes = notes.sort((a, b) => b.date - a.date);

    return (
        <div className="leftContainer">
            {
                sortedNotes && sortedNotes.map(({ id, title, body, date }, index) => {
                    return (
                        <div className={`card ${id === activeNote && "active"}`} key={index} id={id} onClick={() => {
                            setActiveNote(id)
                            getNote(id);
                        }}>
                            <div className="dropdown">
                                <button className="editBtn">Edit</button>
                                <button className="deleteBtn" onClick={() => deleteNote(id)}>Delete</button>
                            </div>
                            <h3 className="dateheading">
                                {new Date(date).toLocaleDateString("en-GB", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </h3>
                            <h2 className="titleheading">
                                {title}
                            </h2>
                            <div className="contentHeading">
                                <p>{body}</p>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default LeftMain;
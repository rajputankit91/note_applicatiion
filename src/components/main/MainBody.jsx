import React, { useState } from "react";
import "./mainBody.css"
import LeftMain from "../LeftMain/LeftMain";
import RightMain from "../rightMain/Rightmain";

const MainBody = ({ onUpdateNote, notes, deleteNote, getNote, selected, setNotes , setSelected,activeNote,setActiveNote,setUrl,url,updateNote}) => {
    // console.log(selected)

    return (
        <main className="main">
            <LeftMain notes={notes} deleteNote={deleteNote} getNote={getNote} activeNote = {activeNote} setActiveNote = {setActiveNote} updateNote = {updateNote} />
            <RightMain onUpdateNote = {onUpdateNote} selected={selected} notes={notes} setNotes={setNotes} setSelected = {setSelected} setUrl = {setUrl} url = {url}  />
        </main>
    )
}

export default MainBody;
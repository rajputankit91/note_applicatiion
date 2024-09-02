import React, { useEffect, useRef, useState } from "react";
import "./rightMain.css"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
// import { ReactSketchCanvas } from "react-sketch-canvas";
import SignatureCanvas from 'react-signature-canvas'
import { ReactSketchCanvas } from 'react-sketch-canvas';

const RightMain = ({ selected, notes, setNotes, setSelected, setUrl, url }) => {
    // console.log(selected)

    const signatureRef = useRef();
    // console.log(signatureRef);
    
    const handleTitleChange = (newH1) => {
        const updatedNotes = notes.map((notee) => {
            if (notee.id === selected.id) {
                notee.title = newH1
            }
            return notee;
        })
        console.log(updatedNotes);
        setNotes(updatedNotes);
        setSelected((prev) => ({ ...prev, title: newH1 }));
    }

    const save = () => {

        const sketchData = signatureRef.current.getTrimmedCanvas().toDataURL("image/png");
        const getImage = <img src={sketchData} />
        const sketchItem = notes.map(item =>{
            if (item.id === selected.id) {
                item.body = getImage
            }
            return item;
        })
        setNotes(sketchItem)
    }

    return (
        <>
            {
                selected && (selected.type === "sketch") ? (
                    <>
                        <div className="rightSection">
                            <input type="text" value={selected.title} onChange={(e) => handleTitleChange(e.target.value)} />
                            <SignatureCanvas ref={signatureRef} canvasProps={{
                            className: "signatureCanvas",
                        }} onEnd={save} />
                            {/* <ReactSketchCanvas ref={signatureRef} onChange={save} /> */}
                        </div>
                    </>
                ) : selected && selected.type === "text" ? (
                    <div className="rightSection">
                        <input type="text" value={selected.title} onChange={(e) => handleTitleChange(e.target.value)} />
                        <ReactQuill theme="snow" />
                        <textarea id="body" className="textArea" type="text" value={selected.body} onChange={(event) => onEditContent(event.target.value)}></textarea>
                    </div>
                ) : ""
            }

        </>
    )

}

export default RightMain;
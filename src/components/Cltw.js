import { dbSevice } from "fbase";
import React, { useState } from "react";

const Cltw = ({cltwObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newCltw, setNewCltw] = useState(cltwObj.text);
    const onDeleteClick = async() => {
        const ok = window.confirm("Are your sure?");
        if(ok) {
            await dbSevice.doc(`cltws/${cltwObj.id}`).delete();
        }
    }
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async(event) => {
        event.preventDefault();
        await dbSevice.doc(`cltws/${cltwObj.id}`).update({
            text:newCltw
        });
        setEditing(false);
    };
    const onChange = (event) => {
        const {target:{value},
        } = event;
        setNewCltw(value);
    };
    return (
        <div>
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit}>
                            <input 
                                type="text"
                                placeholder="Edit your CLTW"
                                value={newCltw}                                 
                                required
                                onChange={onChange}
                            />
                            <input type="submit" value="Update CLTW" />
                        </form> 
                        <button onClick={toggleEditing}>Cancle</button>
                    </>
                ) : ( 
                <>
                    <h4>{cltwObj.text}</h4>
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete CLTW</button>
                            <button onClick={toggleEditing}>Edit CLTW</button>
                        </>
                    )}
                </>
                )}
        </div>
    )
}

export default Cltw;
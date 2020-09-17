import { dbSevice } from "fbase";
import React, { useEffect, useState } from "react"; 
import Cltw from "components/Cltw"


const Home = ({ userObj }) => {
    const [cltw, setCltw] = useState("");
    const [cltws, setCltws] =useState([]);
    
    useEffect(() => {
        //getCltws();
        dbSevice.collection("cltws").onSnapshot(snapshot =>{
            const cltwArray = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
            }))
            setCltws(cltwArray);
        })
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbSevice.collection("cltws").add({
            text: cltw,
            createdAt: Date.now(),
            creatorId : userObj.uid,
        });
        setCltw("");
    };
    const onChange = (event) => {
        const { target:{value},
        } = event;
        setCltw(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                value={cltw}
                onChange={onChange} 
                type="test" 
                placeholder="what's on your mind?" 
                maxLength={120} />
                <input type="submit" value="CLTW" />
            </form>
            <div>
                {cltws.map((cltw) => (
                    <Cltw 
                    key ={cltw.id} 
                    cltwObj={cltw} 
                    isOwner={cltw.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    )
}
export default Home;
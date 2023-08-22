import React, { useState } from "react"

export default function TodoMain () {

    const [title, setTitle] = useState(""); 
    const [desc, setDesc] = useState(""); 

    const [show, setShow] = useState(false); 
    const handleSubmit = () =>{ 
        setShow(true); 
    }

    window.localStorage.setItem("task 1", "washing clothes"); 

    const task1 = window.localStorage.getItem("task 1")

    return (
        <>
        <label htmlFor="title">Enter Title</label>
        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />

        <br />
        <label htmlFor="title">Enter Description</label>
        <input type="text" id="title" onChange={(e) => setDesc(e.target.value)} />

        <br />
        <button onClick={handleSubmit}>Ok Ok OK Ok</button>


        {show && 
        <>
        {title && 
        <div className="title">
            <p>Title : {title}</p>
        </div>
        }

        {desc && 
        <div className="title">
            <p>Description : {desc}</p>
        </div>
        }
        </>
        }

        <div className="fromLocal">
            <p>Task 1 : {task1}</p>
        </div>
        </>
    )
}
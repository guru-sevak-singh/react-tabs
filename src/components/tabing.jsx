import { useState } from "react";

export let Tab =({blog})=>{
    let [visibleTab, SetVisibleTab] = useState(0);



    return (
        <div className="tab">
            <ul className="tab-buttons">
                {
                    blog.map((value, index)=>{
                        return(
                            <li className={`tab-button ${(visibleTab===index)? 'active-button': ''}`} onClick={()=>{SetVisibleTab(index)}} key={index}>{value.title}</li>
                        )
                    })
                }

            </ul>
            <div className="data-area">
                <p>
                    {blog[visibleTab].description}
                </p>
            </div>
        </div>
    )
}
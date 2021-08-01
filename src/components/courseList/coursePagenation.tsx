import React, { useEffect, useState } from 'react';
import "../courseList/courseItem/courseItem.css";

function CoursePagenation(props:{pagecount:number,updatePagination:(index:number)=>void}){
    
    const [presentPage, setPresentPage] = useState(1);
    const [listPageCount, setListPageCount] = useState([1]);
    const [arrowType , setArrowType] = useState(null);

    const changePageNumber = (index:number)=>{
        console.log(index)
        setPresentPage(index)
        props.updatePagination(index);
    }
    
    const changePageNumberUsingArrow = (arrowType:string)=>{
        
        if((!listPageCount.includes(presentPage + 1) && arrowType==="next") || 
        (!listPageCount.includes(presentPage-1) && arrowType==="prev")) return;

        if(arrowType === "next"){
            setPresentPage(presentPage+1)
            props.updatePagination(presentPage+1)
        }
        if(arrowType ==="prev"){
            setPresentPage(presentPage - 1)
           props.updatePagination(presentPage-1)
        }
    }

    useEffect(()=>{
        var pageArray : number []=  [];
        for(let i=1;i<props.pagecount+1;i++){
            pageArray.push(i)
        }
        setListPageCount(pageArray);
    },[props.pagecount])

    return(
        <div className="pageination-container">
            <div>
                <img src="/files/images/leftArrow.svg" alt="leftarrow" onClick={()=>changePageNumberUsingArrow("prev")} />
            </div>
            <div>
                {listPageCount.map((count:number,index:number)=>(
                    <span className={index+1 === presentPage ? "currentPage pagenumbers" :"pagenumbers"} key={index+1} id={"page-"+ (index+1).toString()}
                     onClick={()=>changePageNumber(index+1)}
                     >{count}</span>
                ))}
            </div>
            <div>
            <img src="/files/images/rightArrow.svg" alt="rightarrow" onClick={()=>changePageNumberUsingArrow("next")} />
            </div>
        </div>
    );
}

export default CoursePagenation;

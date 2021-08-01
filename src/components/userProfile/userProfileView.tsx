import React, { useState } from 'react';
import "../userProfile/userProfileView.css";
import TextInput from '../widgets/textInput';
import checkboxArea from '../../mockData/checkBoxData.json';

function UserProfileView() {

    const [checkboxData, setCheckboxData] = useState(checkboxArea);
    const handleSubmit = () => {

    }
    const handleChange = () => {}
    console.log(checkboxData);
    const checkBoxView = () => {
        return (
                <div className="area-checkbox">
                  <ul> 
                  {checkboxData.map((checkbox) =>  (  
                    <div>
                        <input
                            className="check-box"
                            type="checkbox"
                            id="topping"
                            name={checkbox.area}
                            value="Paneer"
                            checked={true}
                            onChange={handleChange}
                            />
                           <span className="label-text"> {checkbox.area}</span>
                   </div>)) } </ul>
                 </div>
        )
    }
    return (
        <div className="user-container">
            <div className="user-photo">
                <img src="/files/images/Profile-pic.png" className="photo" alt="Profile-Pid"></img>
            </div>

            <div className="user-details">
             <form onSubmit={handleSubmit}>
                <div className="user-name">
                        <label className="label">Display Name
                         <TextInput/> </label>
                         <label className="label">First Name
                         <TextInput/> </label>
                         <label className="label">Last Name
                         <TextInput/> </label>
                </div>
                <div className="about-text">
                    <label className="label">About Yourself
                     <div><textarea className="text-area" onChange={handleChange} rows={5} cols={5}></textarea></div>
                    </label>
                </div>

                <div>
                    <div className="label">Your Area of Interest</div>
                    <div className="area-checkbox">
                   
                  {checkboxData.map((checkbox) =>  (  
                    <div>
                        <input
                            className="check-box"
                            type="checkbox"
                            id="topping"
                            name={checkbox.area}
                            value={checkbox.area}
                            checked={checkbox.isChecked}
                            onChange={handleChange}
                            />
                           <span className="label-text"> {checkbox.area}</span>
                   </div>)) } 
                 </div>
                </div>

                <div className="radio-btn">
                <div className="label">Are you a student or Professional</div>
                <div onChange={handleChange}>
                    <input type="radio" value="Student" name="Student" /> Student
                   <div><input type="radio" value="Professional" name="Professional" /> Professional </div>
                </div>
                </div>

             <div className="user-info">
                 <div className="experience-info">
                     <div className="label">How much of experience you have?</div>
                     <div className="user-name">
                       <div className="padding-text"> <input  type="radio" value="0-5" name="0-5" /> 0-5 </div>
                        <div className="padding-text"><input type="radio" value="5-10" name="5-10" /> 5-10 </div>
                        <div className="padding-text"><input type="radio" value="10 & Above" name="10 & Above" /> 10 & Above </div>
                     </div>
                 </div>

                 <div className="experience-info">
                     <div className="label">What is your expertise</div>
                     <div className="user-name">
                       <div className="padding-text"> <input  type="radio" value="Java" name="Java" /> Java </div>
                        <div className="padding-text"><input type="radio" value="React" name="React" /> React </div>
                        <div className="padding-text"><input type="radio" value="Backend" name="Backend" /> Backend </div>
                     </div>
                 </div>  

                <div className="user-name">
                        <label className="label">Mention your role
                         <TextInput/> </label>
                </div>  
             </div>

            <div className="btn-align">
                <button className="save-btn"><p className="save-text">Save</p></button>
            </div>
            </form>
        </div> 
    </div>
    )
}
export default UserProfileView;

function checkbox(checkbox: any): string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined {
    throw new Error('Function not implemented.');
}

import React from 'react';

export const FormTextbox = ({ props }) => {
    return (
        <div className="fromdiv">
            <label htmlFor={props.id} className="formlabel">
                <input type={props.type} id={props.id} placeholder='&nbsp;'
                    autoComplete="off"
                    ref={(input) => { props.iref = input }}/>
                <span className="formspan">{props.placeHolder}</span>
                <span className="formborder"></span>
            </label>
        </div>
    );
};

export const FormButton = ({ props }) => {
    return (
        <div className="fromdiv">
            <div className="frombtndiv">
                <button>{props.placeHolder}</button>
            </div>
        </div>
    );
};
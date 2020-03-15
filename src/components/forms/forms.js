import React,{Component, Fragment, useState, useEffect} from 'react';
import Select from '../select/select';

import {Forms2020} from './2020';
import {Forms2019} from './2019';
 
export const Forms = (props)=>{
    let {text} = props;
    const [selectedYear, onStateChange] = useState(2020);
    const getFormState = (value)=>{
        onStateChange(value);
    };

    return  (
        <Fragment>
            <span className="title">{text}</span> <Select getFormState={getFormState}></Select>
           { selectedYear == '2020' ? 
            <Forms2020></Forms2020> :
            <Forms2019></Forms2019>}
        </Fragment>
    );
};
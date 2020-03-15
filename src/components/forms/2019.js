import React,{useState} from 'react';

const INPUT_LIST = [
    'totalSalary',
    'extraAllowence',
    'HRA',
    'eightyC',
    'internet',
    'books',
    'foodWallet',
    'training',
    'LTA',
    'driverSalary',
    'fuel',
    'eightyD'
];

/**
 * Calculating the tax
 * @param {*} state 
 */
const calculateTax = (state) =>{
    let {totalSalary,extraAllowence, HRA, eightyC, internet,books, foodWallet, training,LTA,driverSalary,fuel,eightyD} = state;
    let range1 = 500000, range2 = 1000000;

    if(totalSalary<=range1){
        return{
            totalSalary,
            tax:0
        }
    }

    let total = (totalSalary+extraAllowence)-(HRA+eightyC+internet+books+foodWallet+training+LTA+driverSalary+fuel+eightyD);

    let calculate = (total)=>{
        let tax = 0;

        let calculateAmount = (slab,range)=>{
            let taxAmount = total-range;
            tax += (taxAmount)*slab/100;
            total = total-taxAmount;
        };

        //In case of salary is greater the 1000000
        if(total>range2){
           calculateAmount(30, range2)
        }

         //In case of salary is greater the 500000
        if(total>range1){
            calculateAmount(20, range1)
        }

        //In case of salary is less the 500000
        if(total<=range1){
            total = total - 250000;
            tax += (total)*5/100;
        }

        return tax;
    }
    calculate(total);
    
    return{
        totalSalary:totalSalary-calculate(total),
        tax:calculate(total)
    }
};


/**
 * Generating the input element
 * @param {*} list 
 */
let input = (state, setstate, list)=>{
    return list && list.map(data=>{
        return(
            <input type='number' value={state[data]}  placeholder={`${data}`} onChange={(e)=>setstate({...state,[data]:e.target.value*1})}></input>
        );
    })
};


/**
 * Generating the objects for default state
 * @param {*} list 
 */

let defaultState = (list)=>{
    let obj = {};
     list.map(data=>{
        obj = {
            ...obj,
            [data]:''
        }
    });
    return obj;
};

export const Forms2019 = () => {
    const [state, setstate] = useState({...defaultState(INPUT_LIST)});
    let _calculateTax = calculateTax(state);
    let _input = input(state, setstate, INPUT_LIST);

    return  (
            <div className="form-wrapper">
                <form>
                    {_input}
                </form>
                <div className="summary">
                    <h1>Summary</h1>
                    Salary: {(state.totalSalary*1)+(state.extraAllowence*1)}<br/>
                    Total after Tax: {_calculateTax.totalSalary} <br/>
                    Tax: {_calculateTax.tax}
                </div>
            </div>
    )
};

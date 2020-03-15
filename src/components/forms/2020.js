import React,{Component, useState} from 'react';

let calculateTotal = (salary)=>{
    if(!salary) return{};
    let total, tax = null;
    if(salary<=500000){
        total = ' ₹' + salary;
        tax = 0;
    }else{
        let inc = 0;
        let _totalTax = 0;
        let calculate = (taxableSalary)=>{
            inc += 5;
            taxableSalary -= 250000;
            if(taxableSalary>250000){
                if(inc == 30){
                    _totalTax += taxableSalary*inc/100;
                }else{
                    _totalTax += 250000*inc/100;
                    calculate(taxableSalary);
                }
            }else{
                _totalTax += taxableSalary*inc/100;
            }
        }
        calculate(salary);
        var withCessTax = _totalTax + (_totalTax*4/100);
        total = salary - withCessTax;
    }
    return {
        total,
        tax:withCessTax
    }
};

export const Forms2020 = ()=> {
    const [state, setstate] = useState({totalSalary:''});
    let _calculateTotal = calculateTotal(state.totalSalary);

        return  (
            <div className="form-wrapper">
                <form>
                    <input type='number' value={state.totalSalary}  placeholder='Total Salary' onChange={(e)=>setstate({...state,totalSalary:e.target.value})}></input>
                </form>
                <div className="summary">
                    <h1>Summary</h1>
                    Salary: {state.totalSalary}<br/>
                    Total after Tax: {_calculateTotal.total} <br/>
                    Tax: {_calculateTotal.tax}
                </div>
            </div>
        )
}
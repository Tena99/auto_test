import React from 'react';
import {useFormik} from 'formik';
import "./style.scss"
import useGetData from "../../hooks/getData";
import Popup from "../Popup/component";
import {useState} from "react";

const SignupForm = () => {
    let [request, setRequest] = useState({vim: "5UXWX7C5*BA"})

    const formik = useFormik({
            initialValues: {
                vim: '',
            },
            onSubmit: values => {
                setRequest(values);
            },
        }
    );

    let variables = useGetData("https://vpic.nhtsa.dot.gov/api/vehicles/", "decodevin/", request.vim, [request])
    let descriptions = useGetData("https://vpic.nhtsa.dot.gov/api/vehicles/", "getvehiclevariablelist")


    if (!variables.loading && !descriptions.loading) {
        let varResults = variables.data.Results
        let desResults = descriptions.data.Results
        console.log(variables, descriptions)

        return (<>
            <form onSubmit={formik.handleSubmit}>
                <div className={"form_wrapper"}>
                    <label htmlFor="vim">Vehicle Identification Number</label>
                    <input
                        id="vim"
                        name="vim"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.vim}
                    />

                    <button type="submit">Submit</button>
                </div>
            </form>

                <div className={"container"}>
        {
            varResults.map(function (variable) {
                return desResults.map(function (description) {
                    if (variable.VariableId === description.ID) {
                        if (variable.Value && variable.Value !== "Not Applicable") {
                            return <span key={variable.VariableId}>
                                <strong>{variable.Variable}</strong>: <span>{variable.Value}</span>
                                <Popup className={variable.Variable} content={description.Description } />
                            </span>
                        }
                    }
                });
            })
        }
                </div>
        </>
        );
    }
};

export default SignupForm
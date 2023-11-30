import * as Yup from "yup";
 export const role=Yup.object().shape({
    email:Yup.string() .email('not email') .required('required form '),
    pass:Yup.number() .required('required form'),


 })
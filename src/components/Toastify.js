import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastify() {
  const successNotify = () => toast.success("Wow so easy!");
  const warningNotify = () => toast.warning("Someting goes wrong!")
  const errorNotify = () => toast.error("Your reseurce can not creating")
  const infoNotify = () => toast.info("your password has been changed")

  return (
    <div>
      <button onClick={successNotify}>successNotify!</button>
      <button onClick={warningNotify}>warningNotify!</button>
      <button onClick={errorNotify}>errorNotify!</button>
      <button onClick={infoNotify}>infoNotify!</button>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover
        closeOnClick
        rtl={false}
        draggable
      />
    </div>

    //https://fkhadra.github.io/react-toastify/introduction/
  )
}

export default Toastify
import { ToastContainer } from 'react-toastify'
import UserForm from './authentication/UserForm'
import UserFormFormik from './authentication/UserFormFormik'
import "../node_modules/react-toastify/dist/reactToastify.css"
import CssPractise from './components/CssPractise'


export default function App(){


  return <>
  <ToastContainer />
  {/* <UserForm /> */}
  {/* <UserFormFormik /> */}

  <CssPractise />


  </>
}
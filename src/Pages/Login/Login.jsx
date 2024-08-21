import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { SyncLoader } from 'react-spinners';
import Swal from 'sweetalert2';

const Login = () => {

const {loginUser, loading, googleSignIn}= useContext(AuthContext)
const navigate = useNavigate();
const location = useLocation()
const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if(password.length < 6){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password should be at least 6 characters',
      })

    }
    loginUser(email,password)
    .then(result=>{
      
      const user = result.user;
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Successfully Login"
      });
      navigate(from, {replace: true})
      console.log(user);
    })
    .catch(error=>{
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Login Faild"
      });
      console.log(error);
    })
  }
  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
      const user = result.user;
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Login successfully"
      });
      navigate(from, {replace: true})
    })
    .catch(error =>{
      console.log(error)
    })
    
  }
  
  return (
    <div className="bg-white dark:bg-base-100 py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-gray-100 md:mb-8 lg:text-3xl">Please Login</h2>

    <div className="mx-auto max-w-lg rounded-lg border dark:border-gray-700">
      
        <form onSubmit={handleLogin}>      
        <div className="flex flex-col gap-4 p-4 md:p-8">
          <div>
          <label for="email" className="mb-2 inline-block text-sm text-gray-800 dark:text-gray-200 sm:text-base">Email</label>
          <input required name="email" placeholder='Enter Your Email' className="w-full rounded border bg-gray-50 dark:bg-gray-800 px-3 py-2 text-gray-800 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <div>
          <label for="password" className="mb-2 inline-block text-sm text-gray-800 dark:text-gray-200 sm:text-base">Password</label>
          <input required type='password' name="password" placeholder='Enter Your Password' className="w-full rounded border bg-gray-50 dark:bg-gray-800 px-3 py-2 text-gray-800 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
       
        
        <input className="block rounded-lg bg-gray-800 dark:bg-gray-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 dark:hover:bg-gray-600 focus-visible:ring active:bg-gray-600 dark:active:bg-gray-500 md:text-base" type="submit" value="Login" />
        </div>
       </form>
       
       <div className="flex flex-col gap-4 p-4 md:p-8">
        <div className="relative flex items-center justify-center">
          <span className="absolute inset-x-0 h-px bg-gray-300 dark:bg-gray-600"></span>
          <span className="relative bg-white dark:bg-base-100 px-4 text-sm text-gray-400 dark:text-gray-500">Log in with social</span>
        </div>

        

        <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-gray-800 dark:text-gray-200 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:ring active:bg-gray-200 dark:active:bg-gray-600 md:text-base">
          <svg className="h-5 w-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z" fill="#4285F4" />
            <path d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z" fill="#34A853" />
            <path d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z" fill="#FBBC05" />
            <path d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z" fill="#EA4335" />
          </svg>

          Continue with Google
        </button>
      </div>

      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4">
        <Link to={'/register'} className="text-center text-sm text-gray-500 dark:text-gray-400">Don't have an account? <a href="#" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 dark:hover:text-indigo-400">Register</a></Link>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;
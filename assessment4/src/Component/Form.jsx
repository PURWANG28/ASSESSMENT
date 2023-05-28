import React, { useContext, useRef } from 'react';


const themes = {
  dark: {
    background: "black",
    foreground: "White",
  },
  light: {
    background: "white",
    foreground: "black",
  }
}



const darkTheme = React.createContext(themes.dark);
const lightTheme = React.createContext(themes.light);


function Form(props) {
  const colorRef = useRef("");
  const dark = useContext(darkTheme);
  const light = useContext(lightTheme);



  const darkBtn = () => {
    colorRef.current.style.background = dark.background;
    colorRef.current.style.color = dark.foreground;
  };

  const lightBtn = () => {
    colorRef.current.style.background = light.background;
    colorRef.current.style.color = light.foreground;
  };

  
  let isShow = true
  const ToggleTheme = () => {
    if (isShow) {
      lightBtn();
      isShow = false;
    }

    else {
      darkBtn();
      isShow = true;
    }
  }

  return (

    <>
      <div className='container-fluid box' ref={colorRef} >
        <div className='row'>
          <form>
            <p className='hi'>Amazing Services  <i class="fa fa-adjust" onClick={ToggleTheme}></i></p>
            <h4 hi>Log in</h4>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label hi">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3 ">
              <label for="exampleInputPassword1" className="form-label hi">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary w-100 hi">Log in</button>
            <hr className='Hline'></hr>
            <button type="submit " className="btn bg-success text-light mb-3 w-100 hi">Create Account</button>
          </form>

        </div>
      </div>
    </>
  );
}

export default Form;
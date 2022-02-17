import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Form from "../Forms/Form"

function App() {

  return (

        <div className="text-center">
            <h1>TODO LIST</h1>
            <Form/>
        </div>
    );
  }


export default App;

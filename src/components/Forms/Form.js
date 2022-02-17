
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Item from '../Items/Item'
import { v4 as uuidv4 } from 'uuid';

function Form() {

  const [contenuelist,setContenuelist] = useState([
      {txt: 'promener le chien', id: uuidv4()},
      {txt: 'faire du react', id: uuidv4()},
      {txt: 'aller au sport', id: uuidv4()},
      {txt: 'faire du football', id: uuidv4()},
  ]);

  const [stateInput, setstateInput] = useState();

  const deleteElement = (id) =>{
     const newteable = contenuelist.filter((item) =>{
        return item.id !== id;
     });
     setContenuelist(newteable);
  }

  const changeInput = (e) =>{
    setstateInput(e);
  }

  const addTodo = (e) => {
    e.preventDefault();
    const newArr = [...contenuelist];
    const newobj = {};
    newobj.txt = stateInput;
    newobj.id = uuidv4();
    newArr.push(newobj);

    setContenuelist(newArr);
  }

  return (

        <div className="text-center m-auto px-4 col-sm-10 col-lg-6  mx-4">
          <form onSubmit={addTodo} className="form-group ">
            <label htmlFor="" className='form-label'>
              chose a faire
            </label>
            <input
            onInput={e => changeInput(e.target.value)}
             type="text" 
             className="form-control col-lg-6 col-sm-12" 
             id="todo" />

            <button className="btn btn-primary mt-2 d-block">Add</button>
          </form>

          <h2>Liste des chose a faire</h2>
          <ul className="list-group">
              {
                contenuelist.map((item) => {
                  return(
                    <Item
                    txt={item.txt}
                    key={item.id}
                    id={item.id}
                    delfunc={deleteElement}
                    />
                  )
                })
              }
          </ul>

        </div>
    );
  }


export default Form;

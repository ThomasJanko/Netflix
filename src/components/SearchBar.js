import React from 'react';

const Searchbar = (props) => {

    const [search, showSearch] = useState(false)

    return (
        <>
        {props.isActive ?

        <div className='overlay' onClick={props.closefunction}>
  
        <div className={props.class}>
            
            <h1 className='modal_title'> {props.title} </h1>
        
        <div className='modal_content'>
              {props.children}
        </div>
        <div className='modal_action'>
            <button type="buuton" className="btn_popup" onClick={props.closefunction} >OK</button>
        </div>
          </div> 
          </div>
        
        : <></>
    }
        </>
    );
}

export default Searchbar;

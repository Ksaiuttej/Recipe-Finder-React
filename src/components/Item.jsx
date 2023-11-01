import React from 'react';
import Dialog from '@mui/material/Dialog';
import ItemDetail from './ItemDetail';

const Item = (props) => {
  const [open, setOpen] = React.useState(false);

  const itemApi = props.api;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="item-bx">
      <div className="item-container" >
        <div className="item-area" onClick={handleClickOpen}>
        <img src={props.imageUrl} alt="" />
        <h2 className='item-title'>{props.title}</h2>
        <div className="item-desc">
          <i className="fas fa-utensils"></i>
          <p>{props.dishType}</p>
        </div>
        </div>
        <a href={itemApi.recipe.url} target="_blank">
          <button>
            Know More
          </button>
        </a>
        </div>
        
      </div>

      <Dialog className='dailog-box'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="80%"
      >
        <div className="dailog-area">
          <span class="material-icons cancel-btn" onClick={handleClose}>
            cancel
          </span>
          <ItemDetail imageUrl={props.imageUrl} item={itemApi} />
        </div>


      </Dialog>
    </div>
  )
}

export default Item;

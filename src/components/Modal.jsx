import classes from './Modal.module.css';

function Modal({children}){
    return(
        <> 
            <div className={classes.modal} />
             <dialog open className={classes.modal}>{children}</dialog>
            
        </>
    )
}

export default Modal;
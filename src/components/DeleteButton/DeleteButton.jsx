import { useDispatch } from "react-redux";
import css from "./DeleteButton.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function DeleteButton({ dataId }) {
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContact(dataId));
    };

    return (
        <button type="button" className={css.button} onClick={handleDeleteContact}>Delete</button>
    )
}

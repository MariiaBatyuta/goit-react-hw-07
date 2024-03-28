import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import DeleteButton from "../DeleteButton/DeleteButton";
import css from "./Contacts.module.css";

export default function Contacts({ contact: { id, name, number } }) {
    return (
        <div className={css.contactCard}>
            <div className={css.contactInfo}>
                <div>
                    <FaUser /><p>{name}</p>
                </div>
                <div>
                    <FaPhone /><p>{number}</p>
                </div>
            </div>
            <div className={css.buttonContainer}>
                <DeleteButton dataId={id}/>
            </div>
        </div>
    );
}
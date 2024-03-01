import './CheckoutForm.css'
import {useState} from  'react';

const CheckoutForm = ({onConfirm}) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleConfirm = (e) => {
        e.preventDefault();
        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return(
        <div className="container">
            <form className='Form' onSubmit={handleConfirm}>
                <label className='label'>
                    Nombre
                    <input type="text" className='input' value={name} onChange={({target}) => setName(target.value)} />
                </label>
                <label className='label'>
                    Telefono
                    <input type="text" className='input' value={phone} onChange={({target}) => setPhone(target.value)} />
                </label>
                <label className='label'>
                    Email 
                    <input type="email" className='input' value={email} onChange={({target}) => setEmail(target.value)} />
                </label>
                <div className='label'>
                    <button type='submit' className='button'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm


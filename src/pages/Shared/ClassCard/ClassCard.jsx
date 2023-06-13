import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassCard = ({clas}) => {
    const {_id,name,image,instructor,price} = clas;
     const {user} = useContext(AuthContext);
     const navigate = useNavigate();
     const location = useLocation();
     const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '50px'}} className="w-[50px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">ClassName:{name}</h3>
                <p>Instructor Name:{instructor}</p>
                <p>Fees:{price} Taka</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(clas)} className="btn btn-outline bg-green-600 border-0 border-b-4 border-red-800 mt-4">Add Class</button>
                </div>
            </div>
            
        </div>
    );
};

export default ClassCard;
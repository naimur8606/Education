import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useDelete = () => {
    const navigate = useNavigate()
    const deleteData = (id) => {
      return fetch(`http://localhost:5000/assignments/${id}`, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Login Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            navigate("/assignments")
          }
        })
        .catch(error => {
            Swal.fire({
                title: 'Warning!',
                text: `${error.message}`,
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
        });
    };
  
    return deleteData;
  };
  
  export default useDelete;
  
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { FaUser } from "react-icons/fa";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddClientModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {
      name,
      email,
      phone,
    },
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if ((!name, !email, !phone)) {
      alert("Please fill in all fields");
    }

    addClient();

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      {/* Button trigger modal  */}
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addClientModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" /> Add Client
        </div>
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="addClientModal"
        aria-labelledby="addClientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addClientModalLabel">
                Add Client
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label
                    htmlFor="emailAddress"
                    className="form-label mt-2 mb-0"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="phone" className="form-label mt-2 mb-0">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Add Client
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddClientModal;

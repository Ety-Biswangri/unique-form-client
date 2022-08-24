import React from 'react';

const FormPart = () => {

    const handleForm = (event) => {
        event.preventDefault();

        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const email = event.target.email.value;
        const address = event.target.address.value;

        const userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            address: address
        }
        console.log(userData);

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleForm}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="first name" class="input input-bordered" name='firstname' required />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="last name" class="input input-bordered" name='lastname' required />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" class="input input-bordered" name='email' required />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="address" class="input input-bordered" name='address' required />
                                </div>

                                <div class="form-control mt-6">
                                    <button class="btn btn-primary" type='submit' value="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormPart;
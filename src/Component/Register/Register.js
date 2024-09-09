import './Register.css';
export default function Register() {
    return (
        <div className="log">
            <div class=" d-flex  h-100 fst-bold ">
                <div class="container-xxl  mt-5 pt-4">
                    <div id="main">
                        <div class="form text-white forms">
                            <p class="fs-1 p-3 text-center">Register Form</p>

                            <div class="form-group">
                                <label for="name" class="form-label mx-5 px-1">Name</label>
                                <input type="text" class="form-control mx-5 mb-2 px-4" id="name" placeholder="enter your name?"></input>
                            </div>
                            <div class="form-group">
                                <label for="phno" class="form-label mx-5 px-1">Ph.No</label>
                                <input type="number" class="form-control mx-5 mb-2 px-4" id="Ph.NO" placeholder="enter your name?"></input>
                            </div>

                            <div class="form-group">
                                <label for="email" class="form-label mx-5 px-1">Email</label>
                                <input type="email" class="form-control mx-5 mb-2 px-4" id="email" placeholder="enter your email?"></input>
                            </div>
                            <div class="form-group">
                                <label for="ps" class="form-label mx-5 px-1">Position</label>
                                <select class="form-select mx-5 mb-2 px-4">
                                    <option>Admin</option>
                                    <option>Empolye</option>
                                    <option>Student</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="pw" class="form-label mx-5 px-1">Branch</label>
                                <select class="form-select mx-5 mb-2 px-4">
                                    <option>Coimbatore</option>
                                    <option>Erode</option>
                                    <option>Salem</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="pw" class="form-label mx-5 px-1">Password</label>
                                <input type="password" class="form-control mx-5 px-4" id="pw" placeholder="enter your password?"></input>
                            </div>
                            <div class="text-center W-25">
                                <p class="btn" id="btn">Sign Up</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
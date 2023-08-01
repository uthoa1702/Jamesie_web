




export const Register = () => {
    return(
        <>
            <div
                className="wrapper"

            >
                <div className="inner">
                    <div className="image-holder">
                        <img src="" alt="" />
                    </div>
                    <form action="">
                        <h3>Registration</h3>
                        <div className="form-group">
                            <input type="text" placeholder="First Name" className="form-control" />
                            <input type="text" placeholder="Last Name" className="form-control" />
                        </div>
                        <div className="form-wrapper">
                            <input type="text" placeholder="Username" className="form-control" />
                            <i className="zmdi zmdi-account" />
                        </div>
                        <div className="form-wrapper">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="form-control"
                            />
                            <i className="zmdi zmdi-email" />
                        </div>
                        <div className="form-wrapper">
                            <select name="" id="" className="form-control">
                                <option value="" disabled="" selected="">
                                    Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="femal">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
                        </div>
                        <div className="form-wrapper">
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                            />
                            <i className="zmdi zmdi-lock" />
                        </div>
                        <div className="form-wrapper">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="form-control"
                            />
                            <i className="zmdi zmdi-lock" />
                        </div>
                        <button>
                            Register
                            <i className="zmdi zmdi-arrow-right" />
                        </button>
                    </form>
                </div>
            </div>

        </>

    )
}
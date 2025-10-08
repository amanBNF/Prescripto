



// API for adding doctors

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, fees, address } = req.body;

        const imageFile = req.file

        console.log({ name, email, password, speciality, degree, experience, fees, address }, imageFile);
        

    } catch (error) {

    }
}

export {addDoctor}
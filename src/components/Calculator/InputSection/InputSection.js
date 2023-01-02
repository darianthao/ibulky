import './InputSection.css'
import {InputLabel,
    MenuItem,
    Select,
    TextField,
    Button, FormControl} from "@mui/material";

function InputSection() {
    let gender;

    function handleChange() {

    }

    return (
        <>
            <div className="input-container">
                <div className="genderField">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" color="secondary">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            color="secondary"
                            value={gender}
                            label="Gender"
                            onChange={handleChange}
                        >
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            <div className="OtherInputFields">
                <TextField label="Age"
                           color="secondary"
                           style={{
                               width:"300px",
                               marginBottom: "30px",
                           }}/>

                <TextField label="Current Weight" color="secondary" style={{width: "300px"}}/>
                <TextField label="Height (ex: 5'10)" color="secondary" style={{width: "300px"}}/>
                <Button variant="outlined" color="secondary">Calculate</Button>
            </div>
            </div>
        </>
    );
}

export default InputSection;
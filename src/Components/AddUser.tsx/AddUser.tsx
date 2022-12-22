import React from 'react'
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';

    

function AddUser() {
  const [name, setName] = React.useState<string>("");
  const [emailId, setEmailId] = React.useState<string>("");

  const handleEmailChange = (
      e: any
  ) => {
      setEmailId(e.target.value);
  };


  const handlenameChange = (
      e: any
  ) => {
      setName(e.target.value);
  };

  const handelverifyEmail = () => {
      console.log(name);
      console.log("Verify your name succesfully");
      console.log(emailId);
      console.log("Verify Email Sucessfully");
      document.write('Login Successfully' + name + emailId);
      // document.write(name);
      // document.write(emailId);

  }


    
    
    
    
       
    
    
        return (
            <Box display={"flex"} flexDirection="column">
    
                <Box
                    display={"flex"}
                    flexDirection="column"
                    alignSelf="center"
                    width="500px"
                    margin="40px"
                >
                    <FormControl
                        variant="filled"
                        size="small"
                        className="field-container"
                    >
                        <TextField
                            required
                            id="Username"
                            variant="filled"
                            label="Username"
                            placeholder="&#x2709;"
                            type="text"
                            size="small"
                            value={name}
                            onChange={(e: any) => handlenameChange(e)}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "24px",
    
                                "& .MuiInputBase-root": {
                                    fontSize: "18px",
                                },
                            }}
                        />
    
                    </FormControl>
    
    
    
                    <FormControl
                        variant="filled"
                        size="small"
                        className="field-container"
                    >
                        <TextField
                            required
                            id="emailId"
                            variant="filled"
                            label="Email Id"
                            placeholder="&#x2709;"
                            type="email"
                            size="small"
                            value={emailId}
                            onChange={(e: any) => handleEmailChange(e)}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "24px",
                                marginTop: '15px',
    
                                "& .MuiInputBase-root": {
                                    fontSize: "18px",
                                },
                            }}
                        />
    
                    </FormControl>
    
    
    
                    <FormControl>
                        <Button
                            sx={{
                                background: 'skyblue',
                                margin: "12px 2px 12px 5px",
                                height: "50px",
                                borderRadius: "24px !important",
                                fontWeight: "700",
                                "&.MuiButton-root:hover": {
                                    WebkitTextDecorationStyle: "none",
    
                                    backgroundColor: "grey !important",
                                },
                            }}
                            onClick={() => handelverifyEmail()}
                        >
                            <Typography variant="h5" color="white">
                                Verify Data
                            </Typography>
                        </Button>
                    </FormControl>
    
                </Box>
            </Box>
    
    
    
        );
    
    }
    
    
  

  
export default AddUser

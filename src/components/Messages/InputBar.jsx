import { TextField, Button, Stack, Input } from "@mui/material";
import { THEMES } from "../../styles/colors";
const InputBar = ({ text, setText, writeToDatabase }) => {
  return (
    <>
      <Stack direction="row">
        <Input
          style={{
            color: THEMES.primary,
            backgroundColor: THEMES.secondary,
            width: "78%",
            fontSize: "15px",
            marginLeft: "5px",
            marginBottom: "-3px",
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          disableElevation
          style={{
            color: THEMES.secondary,
            backgroundColor: THEMES.tertiary,
            marginLeft: "8px",
            marginTop: "0px",
            marginBottom: "0px",
          }}
          onClick={() => writeToDatabase("General")}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default InputBar;

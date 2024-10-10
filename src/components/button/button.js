import { jsx as _jsx } from "react/jsx-runtime";
import Button from '@mui/material/Button';
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function CustomButton(props) {
    //Paso el valor de las props a un objeto:
    var bgcolor = props.bgcolor, text = props.text, txtcolor = props.txtcolor, disabled = props.disabled, onClick = props.onClick, size = props.size;
    return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    _jsx(Button, { type: 'button', onClick: onClick, disabled: disabled, size: size, sx: { backgroundColor: bgcolor, color: txtcolor }, children: text }));
}
export default CustomButton;

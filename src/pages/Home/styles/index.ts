import { Colors } from "../../../config/palette";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    box:{
        backgroundColor:Colors.GLASS,
        minHeight:'30%',
        maxWidth:'60%',
        alignSelf:'center',
        justifySelf:'center',
        position:'relative',
        top:'20%',
        borderRadius:'20px'
    },
    boxItem:{
        padding:'1rem'
    }
}));

export default useStyles;

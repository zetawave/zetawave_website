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
        borderRadius:'20px',
        boxShadow:'-1px 1px 100px 0px #d3e9d4'
    },
    boxItem:{
        alignSelf:'center',
        padding:0,
        margin:0
    },
    text:{
        fontFamily: "IBM Plex Sans Condensed !important",
        fontWeight:'bold !important',
        fontSize:'1.5rem !important'
    },
    icon:{
        width:'5rem',
        height:'5rem',
        padding:'1rem',
        cursor:'pointer'
    },
    button:{
        width:'228px',
        height:'64px',
        padding:'1rem',
        cursor:'pointer'
    }
}));

export default useStyles;

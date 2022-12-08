import { createTheme } from "@mui/material";
import React from "react";

declare module '@mui/material/styles' {
    interface PaletteColor{
        600: string
        500: string
        400: string
        300: string
        200: string
        100: string
    }

    interface CustomPalette{
        elevation:{
            color1: string
            color2: string
        }
    }

    interface CustomTypography{
        title: React.CSSProperties
    }

    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
    interface TypographyVariants extends CustomTypography{}
    interface TypographyVariantsOptions extends CustomTypography{}

}

export const theme=createTheme({
    spacing: 4,
    palette:{
        primary:{
            main:'#6C5DD3',
            '600':'#393552',
            '400':'#B4A9FF',
            '500':'#100F1C',
        },
        grey:{
            '700':'#727080',
            '600':'#413F4D',
            '500':'#E8E8E9',
            '400':'#FFFFFF',
            '300':'#28272B',
            '200':'#3A3A3D',
            '100':'#262529',
            '800':"#19181C",
        },
        elevation:{
            color1:'#201F24',
            color2:'#2D2D30',
        },
        text: {
            primary: '#E8E7F0',
            secondary: '#C9C8CC',
            disabled: '#A5A5A6',
        },
        background: {
            default: '#040407',
        },
    },
    typography: {
        fontFamily:'Gilroy-Regular',
        h1:{
            fontSize:'28px',
            fontWeight:'600',
            lineHeight:'34px',
        },
        h2:{
            fontSize:'24px',
            fontWeight:'600',
            lineHeight:'29px',
            fontStyle:'normal',
        },
        h3:{
            fontSize:'18px',
            fontWeight:'500',
            lineHeight:'27px',
            fontStyle:'normal',
        },
        h6:{
            fontSize:'12px',
            fontWeight:'500',
            lineHeight:'14.5px',
            fontStyle:'normal',
        },
        body1:{
            fontSize:'16px',
            fontWeight:'500',
            fontStyle:'normal',
            lineHeight:'22px',
        },
        body2:{
            fontSize:'14px',
            fontWeight:'600',
            fontStyle:'normal',
            lineHeight:'17px',
        },
        title:{
            fontSize:'36px',
            fontWeight:'700',
            fontStyle:'normal',
            lineHeight:'42px',
        }
    },
    components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom:"none",
          width:"100%"
        },
        head: {
          background: '#262529',
        },
      },
    },
  },
})
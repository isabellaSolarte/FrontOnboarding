import { Box, Typography } from '@mui/material';

interface PropsCustomText {
  texto: string;
  variante: 'titulo' | 'texto' | 'subtitulo' | 'pequeño' | 'boldText';
  icon?: JSX.Element;
  color?: string;
  styles?: object;
  textAlign?: 'center' | 'justify' | 'left' | 'right' | 'start';
}

const CustomText = ({
  texto,
  variante,
  icon,
  color,
  styles = {},
  textAlign = 'start',

}: PropsCustomText) => {
  const colorStyled = variante === 'pequeño' ? 'text.secondary' : 'text.primary';

  const style = {
    padding: 0,
    textAlign: 'justify',
    color: color || colorStyled,
    ...styles,
  };

  const getVariant = (variante: string) => {
    switch (variante) {
      case 'titulo':
        return 'h4';
      case 'texto':
      case 'boldText':
        return 'body1';
      case 'subtitulo':
        return 'h6';
      case 'pequeño':
        return 'caption';
      default:
        return 'body1';
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent={textAlign} gap={0.3}>
      {icon && icon}
      <Typography
        variant={getVariant(variante)}
        sx={{ ...style }}
      >
        {texto}

      </Typography>

    </Box>
  );
};

export default CustomText;
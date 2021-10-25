import { Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

/* cắt chữ theo số dòng */
export const TypographyLineClamp = withStyles(
  () => ({
    root: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': (props) => props.line,
      wordBreak: 'break-word',
    },
  }),
  { name: 'TypographyLineClamp' }
)(Typography);

export default TypographyLineClamp;

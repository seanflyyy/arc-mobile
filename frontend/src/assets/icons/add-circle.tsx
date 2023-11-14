import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AddCircleIcon(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9 1.688c-4.032 0-7.313 3.28-7.313 7.312S4.967 16.313 9 16.313c4.032 0 7.313-3.28 7.313-7.313 0-4.032-3.28-7.313-7.313-7.313zm3.375 7.875H9.562v2.812H8.438V9.562H5.624V8.438h2.813V5.624h1.124v2.813h2.813v1.124z"
        fill="#000"
      />
    </Svg>
  );
}

export default AddCircleIcon;

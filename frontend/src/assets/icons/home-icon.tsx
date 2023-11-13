import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M80 212v236a16.002 16.002 0 0016 16h96V328c0-6.365 2.529-12.47 7.029-16.971A24.005 24.005 0 01216 304h80c6.365 0 12.47 2.529 16.971 7.029A24.005 24.005 0 01320 328v136h96c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314V212"
        stroke={props.color}
        strokeWidth={44}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
        stroke={props.color}
        strokeWidth={44}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HomeIcon;

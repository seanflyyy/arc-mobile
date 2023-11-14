import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CardIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.223 18.47a2.734 2.734 0 002.735 2.734h16.406a2.734 2.734 0 002.734-2.734v-7.52H2.223v7.52zm3.223-3.711a1.465 1.465 0 011.465-1.465h2.343a1.465 1.465 0 011.465 1.465v.976A1.465 1.465 0 019.254 17.2H6.911a1.465 1.465 0 01-1.465-1.465v-.976zM21.364 4.017H4.958A2.734 2.734 0 002.223 6.75v1.27h21.875V6.75a2.734 2.734 0 00-2.734-2.734z"
        fill="#000"
      />
    </Svg>
  );
}

export default CardIcon;

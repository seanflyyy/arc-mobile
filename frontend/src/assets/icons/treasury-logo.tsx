import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TreasuryIcon(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.677 14.11l2.836-2.835 2.358 2.358L13.505 11l-1.495-1.495h4.168v4.169l-1.494-1.495-3.812 3.811-2.358-2.358-2.062 2.063a6.67 6.67 0 10-.773-1.585zm-1.282 1.3l-.008-.008.003-.004a8.337 8.337 0 11.005.012z"
        fill={props.color}
      />
    </Svg>
  );
}

export default TreasuryIcon;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function OperatingIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.157 14.594a6.671 6.671 0 00-9.458-8.38L7.87 4.768A8.338 8.338 0 0119.61 15.433l1.119.646-3.473 1.846-.137-3.93 1.038.599zM5.86 9.42a6.671 6.671 0 009.458 8.379l.827 1.448A8.338 8.338 0 014.406 8.58l-1.118-.646 3.473-1.846.137 3.93-1.038-.6zm3.23 4.254h4.586a.417.417 0 100-.834H10.34a2.084 2.084 0 110-4.168h.834v-.834h1.667v.834h2.084v1.667h-4.585a.417.417 0 000 .834h3.335a2.084 2.084 0 110 4.169h-.834v.833h-1.667v-.833H9.09v-1.668z"
        fill={props.color}
      />
    </Svg>
  );
}

export default OperatingIcon;

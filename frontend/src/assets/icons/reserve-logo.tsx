import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ReserveIcon(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      enableBackground="new 0 0 24 24"
      {...props}>
      <Path
        d="M18 19.5H6v2H4v-2H3c-.6 0-1-.4-1-1v-15c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1h-1v2h-2v-2zm-14-2h16v-13H4v13zm9-4.1v3.1h-2v-3.1c-1.7-.4-3-2-3-3.9 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.9-1.3 3.4-3 3.9zm-1-1.9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
        fill={props.color}
      />
    </Svg>
  );
}

export default ReserveIcon;

const Loader = ({ size = 200 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
    }}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <rect x="17.5" y="30" width="15" height="40" fill="#1d3f72">
      <animate
        attributeName="y"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="18;30;30"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.2s"
      ></animate>
      <animate
        attributeName="height"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="64;40;40"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.2s"
      ></animate>
    </rect>
    <rect x="42.5" y="30" width="15" height="40" fill="#5699d2">
      <animate
        attributeName="y"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="20.999999999999996;30;30"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.1s"
      ></animate>
      <animate
        attributeName="height"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="58.00000000000001;40;40"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.1s"
      ></animate>
    </rect>
    <rect x="67.5" y="30" width="15" height="40" fill="#d8ebf9">
      <animate
        attributeName="y"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="20.999999999999996;30;30"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
      ></animate>
      <animate
        attributeName="height"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="58.00000000000001;40;40"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
      ></animate>
    </rect>
  </svg>
);

export default Loader;

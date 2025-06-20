const CircleProgressPar = ({ percentage = 50, circleWidth = 200 }) => {
  const radius = circleWidth * 0.4;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percentage) / 100;
  return (
    <div
      className="relative"
      style={{ width: circleWidth, height: circleWidth }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth="5"
          className="fill-none stroke-border-primary"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth="5"
          className="fill-none stroke-primary transition-all"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute text-xs top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        {percentage}%
      </span>
    </div>
  );
};

export default CircleProgressPar;

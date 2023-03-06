function PercentBar(props) {
  return (
    <span className="percent-bar-background">
      <span
        className="percent-bar-fill"
        style={{
          width: (props.children + 0.1) * 80,
          background: `hsla(${
            props.ideal === "high"
              ? 120 * Math.max(props.children - 0.1, 0)
              : props.ideal === "low"
              ? 120 - 120 * Math.max(props.children - 0.1, 0)
              : 35
          }, 82%, 60%, 1)`,
        }}
      ></span>
    </span>
  );
}

export default PercentBar;

function Generator(props) {
  return (
    <div className="container generator">
      <h1>Out of Ideas?</h1>
      <button className="gen-btn" onClick={props.callback}>
        Generate
      </button>
    </div>
  );
}

export default Generator;

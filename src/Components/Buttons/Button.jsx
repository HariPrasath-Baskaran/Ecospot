function Button({ label, addOnClasses }) {
  return (
    <>
      <button type="button" class={`btn ${addOnClasses}`}>
        {label}
      </button>
    </>
  );
}

export default Button;

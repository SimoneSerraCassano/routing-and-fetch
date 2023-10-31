function Logo({ size, action }) {
  return (
    <div className={"Logo-" + size} onClick={action ? action : null}>
      <img
        src="https://sysmanagement.it/careers/assets/img/logo.svg"
        alt="Logo System"
      />
      Systagram
    </div>
  );
}

export default Logo;

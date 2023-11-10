import { ReactComponent as LogoSVG } from "assets/logo.svg";

function Logo({ size, action }) {
  return (
    <div className={"Logo-" + size} onClick={action ? action : null}>
      <LogoSVG />
      Systagram
    </div>
  );
}

export default Logo;

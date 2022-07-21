import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { BtnWrap } from "./ButtonCustom.style.js";
// import './Button.css'

// className={`btn ${colorChange}`}
const LinkCustom = ({
  linkUrl,
  titleText,
  className,
  BtnTransparent,
  ParentClass,
  target,
}) => {
  return (
    <BtnWrap BtnTransparent={BtnTransparent} className={`btn_wrap ${ParentClass}`}>
      <Link href={linkUrl} className={`btn ${className}`} target={target}>
        <a>
          {titleText}
          <CgArrowLongRight />
        </a>
      </Link>
    </BtnWrap>
  );
};

export default LinkCustom;

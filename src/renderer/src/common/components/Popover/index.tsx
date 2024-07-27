import { Popover as MUIPopover } from "@mui/material";
import { useState } from "react";

interface Props {
  renderButton?: () => JSX.Element;
  buttonComponent?: JSX.Element;
  children: JSX.Element;
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  transform: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  trigger?: "click" | "hover";
}

function Popover(props: Props): JSX.Element {
  const {
    renderButton,
    children,
    buttonComponent,
    position,
    transform,
    trigger = "click"
  } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "react-popover" : undefined;

  const positionMap = {
    topLeft: { vertical: "top", horizontal: "left" } as Position,
    topRight: { vertical: "top", horizontal: "right" } as Position,
    bottomLeft: { vertical: "bottom", horizontal: "left" } as Position,
    bottomRight: { vertical: "bottom", horizontal: "right" } as Position
  };

  const anchorPosition = positionMap[position];
  const transformPosition = positionMap[transform];

  return (
    <>
      <div
        aria-describedby={id}
        onClick={trigger === "click" ? handleClick : undefined}
        onMouseEnter={trigger === "hover" ? handleMouseEnter : undefined}
        onMouseLeave={trigger === "hover" ? handleMouseLeave : undefined}
      >
        {(renderButton && renderButton()) || buttonComponent}
      </div>
      <MUIPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        anchorOrigin={{
          vertical: anchorPosition.vertical,
          horizontal: anchorPosition.horizontal
        }}
        transformOrigin={{
          vertical: transformPosition.vertical,
          horizontal: transformPosition.horizontal
        }}
        sx={{
          pointerEvents: trigger === "hover" ? "none" : "auto",
          fontSize: "0.8rem",
          "& .MuiPopover-paper": {
            backgroundColor: "rgba(70, 70, 70, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid #353535",
            color: "#fff",
            boxShadow: "5px -4px 40px -10px rgba(0,0,0,0.4)",
            pointerEvents: "auto"
          },
          userSelect: "text"
        }}
      >
        {children}
      </MUIPopover>
    </>
  );
}

type Position = {
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
};

export default Popover;

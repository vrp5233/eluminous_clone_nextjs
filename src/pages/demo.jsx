import React, { useState } from "react";
import Drawer from "rc-drawer";

const Demo = () => {
  const [open, setOpen] = useState(false);
  const onChange = (boolean) => {
    // console.log('change: ', bool);
  };
  const onTouchEnd = () => {
    setOpen(false);
  };
  const onSwitch = () => {
    setOpen((c) => !c);
  };
  return (
    <div>
      <div>
        <button onClick={onSwitch}>打开</button>
      </div>
      <Drawer
        onChange={onChange}
        open={open}
        // defaultOpen
        onClose={onTouchEnd}
        handler={false}
        level={null}
        afterVisibleChange={(boolean) => {
          // console.log('transitionEnd: ', c);
        }}
        placement="right"
        width={400}
      >
        content
      </Drawer>
    </div>
  );
};
export default Demo;

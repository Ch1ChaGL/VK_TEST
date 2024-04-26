import { PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className='content'>
        <div className='container'>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;

import  { Children, ReactNode } from 'react';

interface LayoutProps {
    navbarContent: ReactNode;
    sidebarContent: ReactNode;
    children: ReactNode;
  }

function Layout({navbarContent,children,sidebarContent}:LayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="bg-white w-[80px] h-full ">{sidebarContent}</div>
      <div className="flex-1 flex flex-col">
        <div className="w-full bg-white h-[80px] py-[20px] ">{navbarContent}</div>
        <div className="flex-1 rounded-[50px] p-6 py-12">
    {children}
        </div>
      </div>
    </div>
  );
}

export { Layout };

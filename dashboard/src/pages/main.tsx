import React from 'react';
import { Layout } from '../layout/layout';
import { Navbar } from '../component/UI/navbar';
import { Sidebar } from '../component/UI/sidbar';
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar';
import { Subnavbar } from '../component/UI/subnavbar';
import { List } from '../component/UI/List';
import { AddUserForm } from '../component/UI/AddUserForm';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const icons = [faHome, faChartBar, faUsers];

function Main() {
  const switchValue = useSelector((state: RootState) => state.counter.value);


  return (
    <div>
      <Layout
        navbarContent={<Navbar />}
        children={<>
          <Subnavbar />
          <List />
          {/* {switchValue && <AddUserForm text="Reset" />}  */}
        </>}
        sidebarContent={<Sidebar icons={icons} />}
      />
    </div>
  );
}

export { Main };

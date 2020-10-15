import React from 'react';
import styles from './Sidebar.less';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.siderBar}>
            <div className={styles.logo}>React TS Admin</div>
            SiderMenu
        </div>
    );
};

export default Sidebar;
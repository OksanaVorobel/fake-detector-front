import React, {ReactNode} from 'react';
import { Layout } from 'antd';
import './Layout.css';

const { Content } = Layout;

interface DefaultLayoutProps {
  children: ReactNode; // Використовуємо ReactNode для передачі будь-якого типу дитячих компонентів
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <Layout className="layout">
            <Content className="content">{children}</Content>
        </Layout>
    );
};

export default DefaultLayout;
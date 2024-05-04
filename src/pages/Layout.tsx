import React, {ReactNode} from 'react';
import { Layout } from 'antd';
import '../styles/Layout.css';

const { Content } = Layout;

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <Layout className="layout">
            <Content className="content">{children}</Content>
        </Layout>
    );
};

export default DefaultLayout;

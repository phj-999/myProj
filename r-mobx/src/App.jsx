import { useRoutes } from 'react-router-dom';
import routes from '@/router/routes';
import { Suspense } from 'react';
import { Space, Spin } from 'antd';

import './App.css';

function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <Suspense
        fallback={
          <Space size="middle">
            <Spin tip="加载中..." size="large" />
          </Space>
        }
      >
        {element}
      </Suspense>
    </div>
  );
}

export default App;

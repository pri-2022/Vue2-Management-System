import Mock from "mockjs";
import serviceMock from "@/utils/requestMock";

import t1 from './t1.json';
Mock.mock('mock/t1', { code: 200, data: t1 });

export const reqtitle = () => serviceMock({ url: '/t1', method: 'get' })

